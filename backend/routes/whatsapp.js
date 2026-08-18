import express from 'express';
import prisma from '../utils/db.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @desc    Get WhatsApp settings
// @route   GET /api/whatsapp
// @access  Public
router.get('/', async (req, res) => {
  try {
    let settings = await prisma.whatsAppSettings.findFirst();
    if (!settings) {
      settings = await prisma.whatsAppSettings.create({
        data: {
          id: 1,
          whatsappNumber: '6305029231',
          defaultMessage: 'Hello, I would like to order {medicineName}. Price: {price}. Quantity: {quantity}.',
          businessName: 'R.K. Ayurveda',
          orderMessageFormat: 'Hello, I would like to order {medicineName}. Price: {price}. Quantity: {quantity}.',
        },
      });
    }
    res.json(settings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching WhatsApp settings' });
  }
});

// @desc    Update WhatsApp settings
// @route   PUT /api/whatsapp
// @access  Private
router.put('/', protect, async (req, res) => {
  const { whatsappNumber, defaultMessage, businessName, orderMessageFormat } = req.body;

  try {
    let settings = await prisma.whatsAppSettings.findFirst();
    if (settings) {
      settings = await prisma.whatsAppSettings.update({
        where: { id: settings.id },
        data: { whatsappNumber, defaultMessage, businessName, orderMessageFormat },
      });
    } else {
      settings = await prisma.whatsAppSettings.create({
        data: {
          id: 1,
          whatsappNumber,
          defaultMessage,
          businessName,
          orderMessageFormat,
        },
      });
    }
    res.json(settings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error updating WhatsApp settings' });
  }
});

export default router;
