import express from 'express';
import prisma from '../utils/db.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

function generateSlug(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

async function getUniqueSlug(name, excludeId = null) {
  let baseSlug = generateSlug(name);
  if (!baseSlug) baseSlug = 'medicine';
  let slug = baseSlug;
  let count = 1;

  while (true) {
    const existing = await prisma.medicine.findFirst({
      where: {
        slug,
        id: excludeId ? { not: excludeId } : undefined
      }
    });

    if (!existing) break;
    slug = `${baseSlug}-${count}`;
    count++;
  }

  return slug;
}

// @desc    Get all medicines
// @route   GET /api/medicines
// @access  Public
router.get('/', async (req, res) => {
  try {
    const medicines = await prisma.medicine.findMany({
      include: {
        categories: true,
      },
      orderBy: [
        { displayOrder: 'asc' },
        { createdAt: 'desc' },
      ],
    });
    res.json(medicines);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching medicines' });
  }
});

// @desc    Get medicine by slug
// @route   GET /api/medicines/slug/:slug
// @access  Public
router.get('/slug/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    const medicine = await prisma.medicine.findUnique({
      where: { slug },
      include: {
        categories: true,
      },
    });

    if (!medicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }

    res.json(medicine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching medicine details' });
  }
});

// @desc    Create a medicine
// @route   POST /api/medicines
// @access  Private
router.post('/', protect, async (req, res) => {
  const {
    name,
    teluguName,
    englishName,
    description,
    shortDescription,
    price,
    discountPrice,
    quantity,
    imageUrl,
    availability,
    whatsappEnabled,
    displayOrder,
    ingredients,
    benefits,
    usageInstructions,
    isFeatured,
    isActive,
    categoryId,
    categoryIds,
  } = req.body;

  const finalTelugu = teluguName || '';
  const finalEnglish = englishName || name;

  if (!finalEnglish) {
    return res.status(400).json({ message: 'English Medicine Name is required' });
  }

  try {
    // Collect category IDs from body (both single categoryId and multiple categoryIds array)
    let catIds = [];
    if (categoryIds && Array.isArray(categoryIds)) {
      catIds = categoryIds.map(id => parseInt(id)).filter(Boolean);
    } else if (categoryId) {
      catIds = [parseInt(categoryId)].filter(Boolean);
    }

    const uniqueSlug = await getUniqueSlug(finalEnglish || finalTelugu);
    const order = displayOrder !== undefined ? parseInt(displayOrder) : 0;
    const itemPrice = price !== undefined ? parseFloat(price) : 250;
    const discPrice = discountPrice ? parseFloat(discountPrice) : null;

    const medicine = await prisma.medicine.create({
      data: {
        name: finalEnglish || finalTelugu,
        teluguName: finalTelugu,
        englishName: finalEnglish,
        slug: uniqueSlug,
        description: description || '',
        shortDescription: shortDescription || '',
        price: itemPrice,
        discountPrice: discPrice,
        quantity: quantity || null,
        imageUrl: imageUrl || '',
        availability: availability || 'AVAILABLE',
        whatsappEnabled: whatsappEnabled !== undefined ? !!whatsappEnabled : true,
        displayOrder: order,
        ingredients: ingredients || '',
        benefits: benefits || '',
        usageInstructions: usageInstructions || '',
        isFeatured: isFeatured !== undefined ? !!isFeatured : false,
        isActive: isActive !== undefined ? !!isActive : true,
        categories: {
          connect: catIds.map(id => ({ id }))
        }
      },
      include: {
        categories: true,
      },
    });

    res.status(201).json(medicine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error creating medicine' });
  }
});

// @desc    Update a medicine
// @route   PUT /api/medicines/:id
// @access  Private
router.put('/:id', protect, async (req, res) => {
  const { id } = req.params;
  const {
    name,
    teluguName,
    englishName,
    description,
    shortDescription,
    price,
    discountPrice,
    quantity,
    imageUrl,
    availability,
    whatsappEnabled,
    displayOrder,
    ingredients,
    benefits,
    usageInstructions,
    isFeatured,
    isActive,
    categoryId,
    categoryIds,
  } = req.body;

  try {
    const medId = parseInt(id);
    if (isNaN(medId)) {
      return res.status(400).json({ message: 'Invalid medicine ID' });
    }

    const existingMedicine = await prisma.medicine.findUnique({
      where: { id: medId },
    });

    if (!existingMedicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }

    const updateData = {};

    if (teluguName !== undefined) updateData.teluguName = teluguName;
    if (englishName !== undefined) updateData.englishName = englishName;
    if (quantity !== undefined) updateData.quantity = quantity;

    // Slug regeneration based on English name, falling back to Telugu
    const nameToUse = englishName || teluguName || name;
    if (nameToUse !== undefined && nameToUse !== (existingMedicine.englishName || existingMedicine.teluguName)) {
      updateData.name = nameToUse;
      updateData.slug = await getUniqueSlug(nameToUse, medId);
    }
    
    if (description !== undefined) updateData.description = description;
    if (shortDescription !== undefined) updateData.shortDescription = shortDescription;
    if (price !== undefined) updateData.price = parseFloat(price);
    
    if (discountPrice !== undefined) {
      updateData.discountPrice = discountPrice ? parseFloat(discountPrice) : null;
    }

    if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
    if (availability !== undefined) updateData.availability = availability;
    if (whatsappEnabled !== undefined) updateData.whatsappEnabled = !!whatsappEnabled;
    if (displayOrder !== undefined) updateData.displayOrder = parseInt(displayOrder);
    if (ingredients !== undefined) updateData.ingredients = ingredients;
    if (benefits !== undefined) updateData.benefits = benefits;
    if (usageInstructions !== undefined) updateData.usageInstructions = usageInstructions;
    if (isFeatured !== undefined) updateData.isFeatured = !!isFeatured;
    if (isActive !== undefined) updateData.isActive = !!isActive;
    
    // Connect categories
    if (categoryIds !== undefined || categoryId !== undefined) {
      let catIds = [];
      if (categoryIds && Array.isArray(categoryIds)) {
        catIds = categoryIds.map(id => parseInt(id)).filter(Boolean);
      } else if (categoryId) {
        catIds = [parseInt(categoryId)].filter(Boolean);
      }

      updateData.categories = {
        set: catIds.map(id => ({ id }))
      };
    }

    const medicine = await prisma.medicine.update({
      where: { id: medId },
      data: updateData,
      include: {
        categories: true,
      },
    });

    res.json(medicine);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error updating medicine' });
  }
});

// @desc    Delete a medicine
// @route   DELETE /api/medicines/:id
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  const { id } = req.params;

  try {
    const medId = parseInt(id);
    if (isNaN(medId)) {
      return res.status(400).json({ message: 'Invalid medicine ID' });
    }

    const existingMedicine = await prisma.medicine.findUnique({
      where: { id: medId },
    });

    if (!existingMedicine) {
      return res.status(404).json({ message: 'Medicine not found' });
    }

    await prisma.medicine.delete({
      where: { id: medId },
    });

    res.json({ message: 'Medicine deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error deleting medicine' });
  }
});

export default router;
