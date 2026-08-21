import express from 'express';
import prisma from '../utils/db.js';
import { protect } from '../middleware/auth.js';
import { deleteImage } from '../utils/cloudinary.js';

const router = express.Router();

// @desc    Get site settings
// @route   GET /api/settings
// @access  Public
router.get('/', async (req, res) => {
  try {
    let settings = await prisma.siteSettings.findFirst();
    if (!settings) {
      settings = await prisma.siteSettings.create({
        data: {
          id: 1,
          businessName: 'R.K. Ayurveda',
          heroTitle: 'Pure & Organic Ayurvedic Remedies',
          heroSubtitle: 'Experience the healing power of nature with small-batch, authentic products.',
          aboutIntro: 'Dedicated to bringing authentic Ayurvedic health and wellness to your home.',
          heroButtonText: 'View Medicines',
          heroButtonLink: '/medicines',
          heroVisible: true,
          footerText: '© 2026 R.K. Ayurveda. All rights reserved.',
        },
      });
    }
    res.json(settings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching settings' });
  }
});

// @desc    Update site settings
// @route   PUT /api/settings
// @access  Private
router.put('/', protect, async (req, res) => {
  const { 
    businessName, logoUrl, faviconUrl, heroTitle, heroSubtitle, 
    heroImageUrl, heroButtonText, heroButtonLink, heroVisible, 
    aboutIntro, footerText 
  } = req.body;

  try {
    let settings = await prisma.siteSettings.findFirst();
    const oldLogoUrl = settings?.logoUrl;
    const oldFaviconUrl = settings?.faviconUrl;
    const oldHeroImageUrl = settings?.heroImageUrl;

    const data = {
      businessName,
      logoUrl,
      faviconUrl,
      heroTitle,
      heroSubtitle,
      heroImageUrl,
      heroButtonText,
      heroButtonLink,
      heroVisible: heroVisible !== undefined ? !!heroVisible : true,
      aboutIntro,
      footerText
    };

    if (settings) {
      settings = await prisma.siteSettings.update({
        where: { id: settings.id },
        data,
      });

      // Cleanup replaced images
      if (logoUrl !== undefined && oldLogoUrl && oldLogoUrl !== logoUrl) {
        await deleteImage(oldLogoUrl);
      }
      if (faviconUrl !== undefined && oldFaviconUrl && oldFaviconUrl !== faviconUrl) {
        await deleteImage(oldFaviconUrl);
      }
      if (heroImageUrl !== undefined && oldHeroImageUrl && oldHeroImageUrl !== heroImageUrl) {
        await deleteImage(oldHeroImageUrl);
      }
    } else {
      settings = await prisma.siteSettings.create({
        data: {
          id: 1,
          ...data
        }
      });
    }
    req.app.get('io')?.emit('website:data-updated', { type: 'settings' });
    res.json(settings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error updating settings' });
  }
});

export default router;
