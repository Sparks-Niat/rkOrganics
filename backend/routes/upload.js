import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { protect } from '../middleware/auth.js';
import { uploadImage } from '../utils/cloudinary.js';

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = process.env.VERCEL ? '/tmp' : './uploads';
if (!process.env.VERCEL) {
  if (!fs.existsSync(uploadDir)) {
    try {
      fs.mkdirSync(uploadDir, { recursive: true });
    } catch (err) {
      console.warn('Failed to create local uploads directory:', err.message);
    }
  }
}

// Multer Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// File filter for images only
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = /jpeg|jpg|png|webp|gif/;
  const extname = allowedFileTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimetype = allowedFileTypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only images (jpeg, jpg, png, webp, gif) are allowed!'));
  }
};

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: fileFilter,
});

// @desc    Upload an image
// @route   POST /api/upload
// @access  Private
router.post('/', protect, upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    // Upload to Cloudinary (or fallback to local uploader in utility)
    const imageUrl = await uploadImage(req.file.path);
    res.status(200).json({ imageUrl });
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: error.message || 'Image upload failed' });
  }
});

// Error handling for Multer
router.use((error, req, res, next) => {
  if (error instanceof multer.MulterError) {
    return res.status(400).json({ message: `Multer upload error: ${error.message}` });
  } else if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
});

export default router;
