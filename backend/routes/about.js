import express from 'express';
import prisma from '../utils/db.js';
import { protect } from '../middleware/auth.js';
import { deleteImage } from '../utils/cloudinary.js';

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
          storyImageUrl: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80',
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
    } else if (!about.storyImageUrl) {
      // If it exists but has no image, seed it with a default Unsplash Ayurvedic image
      about = await prisma.aboutContent.update({
        where: { id: about.id },
        data: {
          storyImageUrl: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80'
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

    // 3. Fetch list items
    let philosophyItems = await prisma.aboutPhilosophyItem.findMany({ orderBy: { displayOrder: 'asc' } });
    if (philosophyItems.length === 0) {
      await prisma.aboutPhilosophyItem.createMany({
        data: [
          { icon: 'Leaf', title: 'Natural Approach', description: 'We prioritize raw herbs and plants, avoiding chemical extracts or synthetic shortcuts.', displayOrder: 0, isEnabled: true },
          { icon: 'BookOpen', title: 'Traditional Knowledge', description: 'Each formulation is inspired by classical Ayurvedic texts and ancestral preparations.', displayOrder: 1, isEnabled: true },
          { icon: 'Award', title: 'Quality Focus', description: 'From selection to bottling, we maintain strict parameters of hygiene and raw quality.', displayOrder: 2, isEnabled: true },
          { icon: 'ShieldCheck', title: 'Responsible Wellness', description: 'Empowering individuals to take control of their long-term health naturally and safely.', displayOrder: 3, isEnabled: true }
        ]
      });
      philosophyItems = await prisma.aboutPhilosophyItem.findMany({ orderBy: { displayOrder: 'asc' } });
    }

    let qualityItems = await prisma.aboutQualityItem.findMany({ orderBy: { displayOrder: 'asc' } });
    if (qualityItems.length === 0) {
      await prisma.aboutQualityItem.createMany({
        data: [
          { icon: 'Leaf', title: 'Carefully Selected Herbs', description: 'We partner with local organic growers to source authentic and mature herbs.', displayOrder: 0, isEnabled: true },
          { icon: 'Sparkles', title: 'Traditional Preparation', description: 'Prepared according to traditional Ayurvedic guidelines for maximum bio-availability.', displayOrder: 1, isEnabled: true },
          { icon: 'ShieldCheck', title: 'Pure & Non-Toxic', description: 'Formulated without synthetic chemicals, artificial colors, or heavy metals.', displayOrder: 2, isEnabled: true },
          { icon: 'Compass', title: 'Direct Sourcing', description: 'We establish clean, traceable sourcing pathways to guarantee absolute transparency.', displayOrder: 3, isEnabled: true }
        ]
      });
      qualityItems = await prisma.aboutQualityItem.findMany({ orderBy: { displayOrder: 'asc' } });
    }

    let whyChooseUsItems = await prisma.aboutWhyChooseUsItem.findMany({ orderBy: { displayOrder: 'asc' } });
    if (whyChooseUsItems.length === 0) {
      await prisma.aboutWhyChooseUsItem.createMany({
        data: [
          { icon: 'Heart', title: 'Authentic Formulations', description: 'Recipes formulated by experienced practitioners following time-tested traditions.', displayOrder: 0, isEnabled: true },
          { icon: 'Sparkles', title: 'Small-Batch Freshness', description: 'We produce in small volumes to deliver active, potent botanical products.', displayOrder: 1, isEnabled: true },
          { icon: 'Compass', title: 'Traceable Sourcing', description: 'Direct farmer partnerships ensure pure botanical quality and fair trade.', displayOrder: 2, isEnabled: true },
          { icon: 'User', title: 'Personal Care Focus', description: 'Dedicated support team and custom recommendations for your wellness path.', displayOrder: 3, isEnabled: true },
          { icon: 'Phone', title: 'Easy WhatsApp Ordering', description: 'Simply click to order and chat with us directly for personalized guidance.', displayOrder: 4, isEnabled: true }
        ]
      });
      whyChooseUsItems = await prisma.aboutWhyChooseUsItem.findMany({ orderBy: { displayOrder: 'asc' } });
    }

    let valueItems = await prisma.aboutValueItem.findMany({ orderBy: { displayOrder: 'asc' } });
    if (valueItems.length === 0) {
      await prisma.aboutValueItem.createMany({
        data: [
          { icon: 'Award', title: 'Trust', description: 'We earn and maintain trust through complete transparency in our recipes and sourcing.', displayOrder: 0, isEnabled: true },
          { icon: 'ShieldCheck', title: 'Quality', description: 'Compromising on herb quality is never an option in our production chain.', displayOrder: 1, isEnabled: true },
          { icon: 'BookOpen', title: 'Authenticity', description: 'Staying true to authentic Ayurvedic wisdom and traditional prep methods.', displayOrder: 2, isEnabled: true },
          { icon: 'Leaf', title: 'Natural Living', description: 'Encouraging a harmonious lifestyle in sync with natural seasons and rhythms.', displayOrder: 3, isEnabled: true },
          { icon: 'Heart', title: 'Customer Care', description: 'Supporting every client\'s health journey with compassion and attention.', displayOrder: 4, isEnabled: true },
          { icon: 'CheckCircle2', title: 'Integrity', description: 'Ethical trade and honest communications across all our business services.', displayOrder: 5, isEnabled: true }
        ]
      });
      valueItems = await prisma.aboutValueItem.findMany({ orderBy: { displayOrder: 'asc' } });
    }

    let galleryImages = await prisma.aboutGalleryImage.findMany({ orderBy: { displayOrder: 'asc' } });
    if (galleryImages.length === 0) {
      await prisma.aboutGalleryImage.createMany({
        data: [
          { imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', title: 'Traditional Wellness Prep', description: 'Authentic herbal oils infusion.', displayOrder: 0, isEnabled: true },
          { imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80', title: 'Pure Botanical Sourcing', description: 'Sourcing certified organic ingredients.', displayOrder: 1, isEnabled: true },
          { imageUrl: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80', title: 'Apothecary Storage', description: 'Carefully preserving herb freshness.', displayOrder: 2, isEnabled: true }
        ]
      });
      galleryImages = await prisma.aboutGalleryImage.findMany({ orderBy: { displayOrder: 'asc' } });
    }

    const certifications = await prisma.aboutCertification.findMany({ orderBy: { displayOrder: 'asc' } });

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
    const oldStoryImageUrl = about?.storyImageUrl;

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

      if (storyImageUrl !== undefined && oldStoryImageUrl && oldStoryImageUrl !== storyImageUrl) {
        await deleteImage(oldStoryImageUrl);
      }
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
