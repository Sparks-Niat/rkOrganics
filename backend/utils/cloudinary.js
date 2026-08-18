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
