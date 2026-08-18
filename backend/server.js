import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Import Route Handlers
import authRoutes from './routes/auth.js';
import settingsRoutes from './routes/settings.js';
import aboutRoutes from './routes/about.js';
import categoriesRoutes from './routes/categories.js';
import medicinesRoutes from './routes/medicines.js';
import contactRoutes from './routes/contact.js';
import whatsappRoutes from './routes/whatsapp.js';
import uploadRoutes from './routes/upload.js';
import benefitsRoutes from './routes/benefits.js';
import testimonialsRoutes from './routes/testimonials.js';
import promotionsRoutes from './routes/promotions.js';
import navigationRoutes from './routes/navigation.js';

// Load Environment Variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ensure uploads folder exists
const uploadsPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsPath)) {
  fs.mkdirSync(uploadsPath, { recursive: true });
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static route for serving uploaded images (local fallback uploader)
app.use('/uploads', express.static(uploadsPath));

// API Routes mounting
app.use('/api/auth', authRoutes);
app.use('/api/settings', settingsRoutes);
app.use('/api/homepage', settingsRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/medicines', medicinesRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/whatsapp', whatsappRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/benefits', benefitsRoutes);
app.use('/api/testimonials', testimonialsRoutes);
app.use('/api/promotions', promotionsRoutes);
app.use('/api/navigation', navigationRoutes);

// Health Check / Root route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Ayurvedic Organics API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    message: err.message || 'An internal server error occurred',
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
