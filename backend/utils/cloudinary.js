import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';
import path from 'path';

// Check if Cloudinary configuration is provided
const isCloudinaryConfigured = 
  process.env.CLOUDINARY_CLOUD_NAME && 
  process.env.CLOUDINARY_API_KEY && 
  process.env.CLOUDINARY_API_SECRET;

if (isCloudinaryConfigured) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  console.log('Cloudinary storage initialized.');
} else {
  console.log('Cloudinary credentials missing. Falling back to Local Storage for uploads.');
}

/**
 * Uploads a local file to Cloudinary or keeps it in local storage.
 * @param {string} localFilePath - Path to the file on local disk
 * @returns {Promise<string>} - The permanent secure URL or local server URL
 */
export async function uploadImage(localFilePath) {
  if (!localFilePath) return null;

  try {
    if (isCloudinaryConfigured) {
      // Upload to Cloudinary
      const result = await cloudinary.uploader.upload(localFilePath, {
        folder: 'ayurvedic_organics',
      });
      // Delete temporary local file
      try {
        fs.unlinkSync(localFilePath);
      } catch (err) {
        console.error('Error deleting temp file:', err);
      }
      return result.secure_url;
    } else {
      // Return local URL (assumes server is serving 'uploads/' directory at root)
      const filename = path.basename(localFilePath);
      // We will construct the absolute URL at request time, but for storage we return the relative path
      // e.g. /uploads/filename.jpg which the frontend can prefix with the server origin
      return `/uploads/${filename}`;
    }
  } catch (error) {
    console.error('Upload error:', error);
    // Cleanup local file on failure
    try {
      if (fs.existsSync(localFilePath)) {
        fs.unlinkSync(localFilePath);
      }
    } catch (err) {
      console.error('Error cleanup temp file:', err);
    }
    throw error;
  }
}

/**
 * Deletes an image from Cloudinary or local storage.
 * @param {string} imageUrl - The URL of the image to delete
 */
export async function deleteImage(imageUrl) {
  if (!imageUrl) return;

  try {
    if (isCloudinaryConfigured && imageUrl.includes('res.cloudinary.com')) {
      // Parse public_id from Cloudinary URL
      const parts = imageUrl.split('/image/upload/');
      if (parts.length > 1) {
        const afterUpload = parts[1];
        const segments = afterUpload.split('/');
        let publicIdWithExt;
        
        // Skip version folder e.g. v123456789
        if (segments[0].startsWith('v') && !isNaN(segments[0].substring(1))) {
          publicIdWithExt = segments.slice(1).join('/');
        } else {
          publicIdWithExt = segments.join('/');
        }
        
        // Remove file extension
        const lastDot = publicIdWithExt.lastIndexOf('.');
        const publicId = lastDot !== -1 ? publicIdWithExt.substring(0, lastDot) : publicIdWithExt;
        
        console.log(`Deleting Cloudinary asset: ${publicId}`);
        await cloudinary.uploader.destroy(publicId);
      }
    } else if (imageUrl.includes('/uploads/')) {
      // Delete local file
      const filename = path.basename(imageUrl);
      const localFilePath = path.join(process.env.VERCEL ? '/tmp' : './uploads', filename);
      if (fs.existsSync(localFilePath)) {
        console.log(`Deleting local file: ${localFilePath}`);
        fs.unlinkSync(localFilePath);
      }
    }
  } catch (error) {
    console.error('Error deleting image:', error);
  }
}

