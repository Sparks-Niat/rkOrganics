import express from 'express';
import prisma from '../utils/db.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @desc    Get contact details
// @route   GET /api/contact
// @access  Public
router.get('/', async (req, res) => {
  try {
    let contact = await prisma.contactDetails.findFirst();
    if (!contact) {
      contact = await prisma.contactDetails.create({
        data: {
          id: 1,
          businessName: 'R.K. Organics',
          address: '123 Ayurvedic Lane, Heritage Town',
          phone: '+91 6305029231',
          whatsapp: '6305029231',
          email: 'info@rkayurveda.com',
          googleMapsLink: 'https://maps.google.com',
          openingHours: '9:00 AM - 6:00 PM (Mon - Sat)',
        },
      });
    }
    res.json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching contact details' });
  }
});

// @desc    Update contact details
// @route   PUT /api/contact
// @access  Private
router.put('/', protect, async (req, res) => {
  const {
    businessName,
    address,
    phone,
    whatsapp,
    email,
    googleMapsLink,
    openingHours,
    instagramUrl,
    facebookUrl,
    twitterUrl,
  } = req.body;

  try {
    let contact = await prisma.contactDetails.findFirst();
    if (contact) {
      contact = await prisma.contactDetails.update({
        where: { id: contact.id },
        data: {
          businessName,
          address,
          phone,
          whatsapp,
          email,
          googleMapsLink,
          openingHours,
          instagramUrl,
          facebookUrl,
          twitterUrl,
        },
      });
    } else {
      contact = await prisma.contactDetails.create({
        data: {
          id: 1,
          businessName,
          address,
          phone,
          whatsapp,
          email,
          googleMapsLink,
          openingHours,
          instagramUrl,
          facebookUrl,
          twitterUrl,
        },
      });
    }
    res.json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error updating contact details' });
  }
});

export default router;
