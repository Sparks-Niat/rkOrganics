import express from 'express';
import prisma from '../utils/db.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

const DEFAULT_SECTIONS = [
  { id: 'hero', title: 'Hero Section', isEnabled: true, displayOrder: 0 },
  { id: 'story', title: 'Our Story', isEnabled: true, displayOrder: 1 },
  { id: 'mission_vision', title: 'Mission & Vision', isEnabled: true, displayOrder: 2 },
  { id: 'philosophy', title: 'Ayurvedic Philosophy', isEnabled: true, displayOrder: 3 },
  { id: 'quality', title: 'Quality Assurance', isEnabled: true, displayOrder: 4 },
  { id: 'why_choose_us', title: 'Why Choose Us', isEnabled: true, displayOrder: 5 },
  { id: 'values', title: 'Our Values', isEnabled: true, displayOrder: 6 },
  { id: 'gallery', title: 'Gallery', isEnabled: true, displayOrder: 7 },
  { id: 'certifications', title: 'Certifications', isEnabled: false, displayOrder: 8 },
  { id: 'cta', title: 'Call To Action', isEnabled: true, displayOrder: 9 }
];

// @desc    Get complete about content with all sub-items
// @route   GET /api/about
// @access  Public
router.get('/', async (req, res) => {
  try {
    // 1. Fetch or create base AboutContent
    let about = await prisma.aboutContent.findFirst();
    if (!about) {
      about = await prisma.aboutContent.create({
        data: {
          id: 1,
          heading: 'About R.K. Ayurveda',
          aboutIntro: 'Dedicated to bringing authentic Ayurvedic health and wellness to your home.',
          ourStory: 'Founded with a commitment to pure wellness, R.K. Ayurveda continues the legacy of traditional Ayurvedic healing.',
          storyImageUrl: '',
          mission: 'To make pure, authentic, and organic Ayurvedic remedies accessible to everyone.',
          vision: 'To be a globally trusted name in Ayurveda, recognized for our commitment to quality.',
          philosophyIntro: 'Our approach is guided by timeless natural wisdom.',
          qualityIntro: 'We ensure transparency and care in every product.',
          whyChooseUsIntro: 'Why customers trust R.K. Ayurveda.',
          valuesIntro: 'The core principles that guide us.',
          galleryTitle: 'Inside R.K. Ayurveda',
          galleryIntro: 'Take a look at our daily operations, products, and ingredients.',
          certificationsTitle: 'Our Certifications & Trust Standards',
          certificationsIntro: 'Genuine business standards and registrations.',
          certificationsEnabled: false,
          ctaTitle: 'Explore Our Ayurvedic Products',
          ctaButtonText: 'View Medicines',
          ctaButtonLink: '/medicines',
          ctaWhatsAppText: 'Order on WhatsApp',
          isEnabled: true
        }
      });
    }

    // 2. Fetch or initialize sections order
    let sections = await prisma.aboutSection.findMany({
      orderBy: { displayOrder: 'asc' }
    });
    if (sections.length === 0) {
      await prisma.aboutSection.createMany({
        data: DEFAULT_SECTIONS
      });
      sections = await prisma.aboutSection.findMany({
        orderBy: { displayOrder: 'asc' }
      });
    }

    // 3. Fetch list items in parallel
    const [
      philosophyItems,
      qualityItems,
      whyChooseUsItems,
      valueItems,
      galleryImages,
      certifications
    ] = await Promise.all([
      prisma.aboutPhilosophyItem.findMany({ orderBy: { displayOrder: 'asc' } }),
      prisma.aboutQualityItem.findMany({ orderBy: { displayOrder: 'asc' } }),
      prisma.aboutWhyChooseUsItem.findMany({ orderBy: { displayOrder: 'asc' } }),
      prisma.aboutValueItem.findMany({ orderBy: { displayOrder: 'asc' } }),
      prisma.aboutGalleryImage.findMany({ orderBy: { displayOrder: 'asc' } }),
      prisma.aboutCertification.findMany({ orderBy: { displayOrder: 'asc' } })
    ]);

    res.json({
      ...about,
      sections,
      philosophyItems,
      qualityItems,
      whyChooseUsItems,
      valueItems,
      galleryImages,
      certifications
    });
  } catch (error) {
    console.error('Error fetching complete about payload:', error);
    res.status(500).json({ message: 'Server error fetching about content' });
  }
});

// @desc    Update general about content and section configuration
// @route   PUT /api/about
// @access  Private
router.put('/', protect, async (req, res) => {
  const {
    heading,
    aboutIntro,
    ourStory,
    storyImageUrl,
    mission,
    vision,
    philosophyIntro,
    qualityIntro,
    whyChooseUsIntro,
    valuesIntro,
    galleryTitle,
    galleryIntro,
    certificationsTitle,
    certificationsIntro,
    certificationsEnabled,
    ctaTitle,
    ctaButtonText,
    ctaButtonLink,
    ctaWhatsAppText,
    isEnabled,
    sections // Expected Array of { id, title, isEnabled, displayOrder }
  } = req.body;

  try {
    let about = await prisma.aboutContent.findFirst();
    const data = {
      heading: heading || 'About R.K. Ayurveda',
      aboutIntro: aboutIntro || '',
      ourStory: ourStory || '',
      storyImageUrl: storyImageUrl || '',
      mission: mission || '',
      vision: vision || '',
      philosophyIntro: philosophyIntro || '',
      qualityIntro: qualityIntro || '',
      whyChooseUsIntro: whyChooseUsIntro || '',
      valuesIntro: valuesIntro || '',
      galleryTitle: galleryTitle || 'Inside R.K. Ayurveda',
      galleryIntro: galleryIntro || '',
      certificationsTitle: certificationsTitle || 'Our Certifications & Trust Standards',
      certificationsIntro: certificationsIntro || '',
      certificationsEnabled: certificationsEnabled !== undefined ? !!certificationsEnabled : false,
      ctaTitle: ctaTitle || 'Explore Our Ayurvedic Products',
      ctaButtonText: ctaButtonText || 'View Medicines',
      ctaButtonLink: ctaButtonLink || '/medicines',
      ctaWhatsAppText: ctaWhatsAppText || 'Order on WhatsApp',
      isEnabled: isEnabled !== undefined ? !!isEnabled : true
    };

    if (about) {
      about = await prisma.aboutContent.update({
        where: { id: about.id },
        data
      });
    } else {
      about = await prisma.aboutContent.create({
        data: { id: 1, ...data }
      });
    }

    // Update section ordering if provided
    if (Array.isArray(sections)) {
      for (const sec of sections) {
        await prisma.aboutSection.upsert({
          where: { id: sec.id },
          update: {
            title: sec.title,
            isEnabled: !!sec.isEnabled,
            displayOrder: parseInt(sec.displayOrder, 10) || 0
          },
          create: {
            id: sec.id,
            title: sec.title,
            isEnabled: !!sec.isEnabled,
            displayOrder: parseInt(sec.displayOrder, 10) || 0
          }
        });
      }
    }

    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.json(about);
  } catch (error) {
    console.error('Error updating about content:', error);
    res.status(500).json({ message: 'Server error updating about content' });
  }
});

// ==========================================
// PHILOSOPHY ITEMS CRUD
// ==========================================
router.post('/philosophy', protect, async (req, res) => {
  const { icon, title, description, displayOrder, isEnabled } = req.body;
  try {
    const item = await prisma.aboutPhilosophyItem.create({
      data: {
        icon: icon || 'Leaf',
        title: title || '',
        description: description || '',
        displayOrder: parseInt(displayOrder, 10) || 0,
        isEnabled: isEnabled !== undefined ? !!isEnabled : true
      }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error creating philosophy item' });
  }
});

router.put('/philosophy/:id', protect, async (req, res) => {
  const { id } = req.params;
  const { icon, title, description, displayOrder, isEnabled } = req.body;
  try {
    const item = await prisma.aboutPhilosophyItem.update({
      where: { id: parseInt(id, 10) },
      data: {
        icon,
        title,
        description,
        displayOrder: displayOrder !== undefined ? parseInt(displayOrder, 10) : undefined,
        isEnabled: isEnabled !== undefined ? !!isEnabled : undefined
      }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error updating philosophy item' });
  }
});

router.delete('/philosophy/:id', protect, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.aboutPhilosophyItem.delete({
      where: { id: parseInt(id, 10) }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting philosophy item' });
  }
});

// ==========================================
// QUALITY ITEMS CRUD
// ==========================================
router.post('/quality', protect, async (req, res) => {
  const { icon, title, description, displayOrder, isEnabled } = req.body;
  try {
    const item = await prisma.aboutQualityItem.create({
      data: {
        icon: icon || 'Award',
        title: title || '',
        description: description || '',
        displayOrder: parseInt(displayOrder, 10) || 0,
        isEnabled: isEnabled !== undefined ? !!isEnabled : true
      }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error creating quality item' });
  }
});

router.put('/quality/:id', protect, async (req, res) => {
  const { id } = req.params;
  const { icon, title, description, displayOrder, isEnabled } = req.body;
  try {
    const item = await prisma.aboutQualityItem.update({
      where: { id: parseInt(id, 10) },
      data: {
        icon,
        title,
        description,
        displayOrder: displayOrder !== undefined ? parseInt(displayOrder, 10) : undefined,
        isEnabled: isEnabled !== undefined ? !!isEnabled : undefined
      }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error updating quality item' });
  }
});

router.delete('/quality/:id', protect, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.aboutQualityItem.delete({
      where: { id: parseInt(id, 10) }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting quality item' });
  }
});

// ==========================================
// WHY CHOOSE US ITEMS CRUD
// ==========================================
router.post('/why-choose-us', protect, async (req, res) => {
  const { icon, title, description, displayOrder, isEnabled } = req.body;
  try {
    const item = await prisma.aboutWhyChooseUsItem.create({
      data: {
        icon: icon || 'CheckCircle',
        title: title || '',
        description: description || '',
        displayOrder: parseInt(displayOrder, 10) || 0,
        isEnabled: isEnabled !== undefined ? !!isEnabled : true
      }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error creating why choose us item' });
  }
});

router.put('/why-choose-us/:id', protect, async (req, res) => {
  const { id } = req.params;
  const { icon, title, description, displayOrder, isEnabled } = req.body;
  try {
    const item = await prisma.aboutWhyChooseUsItem.update({
      where: { id: parseInt(id, 10) },
      data: {
        icon,
        title,
        description,
        displayOrder: displayOrder !== undefined ? parseInt(displayOrder, 10) : undefined,
        isEnabled: isEnabled !== undefined ? !!isEnabled : undefined
      }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error updating why choose us item' });
  }
});

router.delete('/why-choose-us/:id', protect, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.aboutWhyChooseUsItem.delete({
      where: { id: parseInt(id, 10) }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting why choose us item' });
  }
});

// ==========================================
// VALUES CRUD
// ==========================================
router.post('/values', protect, async (req, res) => {
  const { icon, title, description, displayOrder, isEnabled } = req.body;
  try {
    const item = await prisma.aboutValueItem.create({
      data: {
        icon: icon || 'Heart',
        title: title || '',
        description: description || '',
        displayOrder: parseInt(displayOrder, 10) || 0,
        isEnabled: isEnabled !== undefined ? !!isEnabled : true
      }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error creating value item' });
  }
});

router.put('/values/:id', protect, async (req, res) => {
  const { id } = req.params;
  const { icon, title, description, displayOrder, isEnabled } = req.body;
  try {
    const item = await prisma.aboutValueItem.update({
      where: { id: parseInt(id, 10) },
      data: {
        icon,
        title,
        description,
        displayOrder: displayOrder !== undefined ? parseInt(displayOrder, 10) : undefined,
        isEnabled: isEnabled !== undefined ? !!isEnabled : undefined
      }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error updating value item' });
  }
});

router.delete('/values/:id', protect, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.aboutValueItem.delete({
      where: { id: parseInt(id, 10) }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting value item' });
  }
});

// ==========================================
// GALLERY IMAGES CRUD
// ==========================================
router.post('/gallery', protect, async (req, res) => {
  const { imageUrl, title, description, displayOrder, isEnabled } = req.body;
  if (!imageUrl) {
    return res.status(400).json({ message: 'Image URL is required' });
  }
  try {
    const item = await prisma.aboutGalleryImage.create({
      data: {
        imageUrl,
        title: title || '',
        description: description || '',
        displayOrder: parseInt(displayOrder, 10) || 0,
        isEnabled: isEnabled !== undefined ? !!isEnabled : true
      }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error creating gallery item' });
  }
});

router.put('/gallery/:id', protect, async (req, res) => {
  const { id } = req.params;
  const { imageUrl, title, description, displayOrder, isEnabled } = req.body;
  try {
    const item = await prisma.aboutGalleryImage.update({
      where: { id: parseInt(id, 10) },
      data: {
        imageUrl,
        title,
        description,
        displayOrder: displayOrder !== undefined ? parseInt(displayOrder, 10) : undefined,
        isEnabled: isEnabled !== undefined ? !!isEnabled : undefined
      }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error updating gallery item' });
  }
});

router.delete('/gallery/:id', protect, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.aboutGalleryImage.delete({
      where: { id: parseInt(id, 10) }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting gallery item' });
  }
});

// ==========================================
// CERTIFICATIONS CRUD
// ==========================================
router.post('/certifications', protect, async (req, res) => {
  const { imageUrl, title, description, issuer, displayOrder, isEnabled } = req.body;
  try {
    const item = await prisma.aboutCertification.create({
      data: {
        imageUrl,
        title: title || '',
        description: description || '',
        issuer: issuer || '',
        displayOrder: parseInt(displayOrder, 10) || 0,
        isEnabled: isEnabled !== undefined ? !!isEnabled : true
      }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error creating certification item' });
  }
});

router.put('/certifications/:id', protect, async (req, res) => {
  const { id } = req.params;
  const { imageUrl, title, description, issuer, displayOrder, isEnabled } = req.body;
  try {
    const item = await prisma.aboutCertification.update({
      where: { id: parseInt(id, 10) },
      data: {
        imageUrl,
        title,
        description,
        issuer,
        displayOrder: displayOrder !== undefined ? parseInt(displayOrder, 10) : undefined,
        isEnabled: isEnabled !== undefined ? !!isEnabled : undefined
      }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.json(item);
  } catch (error) {
    res.status(500).json({ message: 'Error updating certification item' });
  }
});

router.delete('/certifications/:id', protect, async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.aboutCertification.delete({
      where: { id: parseInt(id, 10) }
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'about' });
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting certification item' });
  }
});

export default router;
