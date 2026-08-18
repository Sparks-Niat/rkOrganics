import express from 'express';
import prisma from '../utils/db.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @desc    Get about content
// @route   GET /api/about
// @access  Public
router.get('/', async (req, res) => {
  try {
    let about = await prisma.aboutContent.findFirst();
    if (!about) {
      about = await prisma.aboutContent.create({
        data: {
          id: 1,
          heading: 'About Our Organisation',
          ourStory: 'Founded with a commitment to pure wellness, R.K. Ayurveda continues the legacy of traditional Ayurvedic healing.',
          mission: 'To make pure, authentic, and organic Ayurvedic remedies accessible to everyone.',
          vision: 'To be a globally trusted name in Ayurveda, recognized for our commitment to quality.',
          philosophy: 'Ayurveda is the science of life.',
          qualityInfo: 'Every batch is prepared with strict adherence to traditional methods.',
          whyChooseUs: '100% natural formula, chemical-free processing, heritage-based recipes.',
          additionalContent: '',
        },
      });
    }
    res.json(about);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching about content' });
  }
});

// @desc    Update about content
// @route   PUT /api/about
// @access  Private
router.put('/', protect, async (req, res) => {
  const {
    heading,
    ourStory,
    mission,
    vision,
    philosophy,
    qualityInfo,
    whyChooseUs,
    additionalContent,
    imageUrl,
    isEnabled,
  } = req.body;

  try {
    let about = await prisma.aboutContent.findFirst();
    const data = {
      heading: heading || 'About Our Organisation',
      ourStory,
      mission,
      vision,
      philosophy,
      qualityInfo,
      whyChooseUs,
      additionalContent,
      imageUrl,
      isEnabled: isEnabled !== undefined ? !!isEnabled : true,
    };

    if (about) {
      about = await prisma.aboutContent.update({
        where: { id: about.id },
        data,
      });
    } else {
      about = await prisma.aboutContent.create({
        data: {
          id: 1,
          ...data
        },
      });
    }
    res.json(about);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error updating about content' });
  }
});

export default router;
