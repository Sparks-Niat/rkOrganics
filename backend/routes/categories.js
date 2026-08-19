import express from 'express';
import prisma from '../utils/db.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
router.get('/', async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        displayOrder: 'asc',
      },
    });
    res.json(categories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching categories' });
  }
});

// @desc    Get category by ID
// @route   GET /api/categories/:id
// @access  Public
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const categoryId = parseInt(id);
    if (isNaN(categoryId)) {
      return res.status(400).json({ message: 'Invalid category ID' });
    }
    const category = await prisma.category.findUnique({
      where: { id: categoryId },
    });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching category' });
  }
});

// @desc    Get medicines belonging to a category
// @route   GET /api/categories/:id/medicines
// @access  Public
router.get('/:id/medicines', async (req, res) => {
  const { id } = req.params;
  try {
    const catId = parseInt(id);
    if (isNaN(catId)) {
      return res.status(400).json({ message: 'Invalid category ID' });
    }
    const category = await prisma.category.findUnique({
      where: { id: catId },
      include: {
        medicines: {
          include: {
            categories: true
          },
          orderBy: {
            displayOrder: 'asc'
          }
        }
      }
    });
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    res.json(category.medicines);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching category medicines' });
  }
});

// @desc    Create a category
// @route   POST /api/categories
// @access  Private
router.post('/', protect, async (req, res) => {
  const {
    name,
    teluguName,
    englishName,
    teluguSubtitle,
    englishSubtitle,
    description,
    imageUrl,
    displayOrder,
    isEnabled
  } = req.body;

  const finalEnglish = englishName || name;
  const finalTelugu = teluguName || name;

  if (!finalTelugu || !finalEnglish) {
    return res.status(400).json({ message: 'Telugu Name and English Name are required' });
  }

  try {
    const exists = await prisma.category.findUnique({
      where: { name: finalEnglish },
    });

    if (exists) {
      return res.status(400).json({ message: 'Category name already exists' });
    }

    const order = displayOrder !== undefined ? parseInt(displayOrder) : 0;

    const category = await prisma.category.create({
      data: {
        name: finalEnglish,
        teluguName: finalTelugu,
        englishName: finalEnglish,
        teluguSubtitle: teluguSubtitle || '',
        englishSubtitle: englishSubtitle || '',
        description: description || '',
        imageUrl: imageUrl || '',
        displayOrder: order,
        isEnabled: isEnabled !== undefined ? isEnabled : true,
      },
    });

    req.app.get('io')?.emit('website:data-updated', { type: 'categories' });
    res.status(201).json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error creating category' });
  }
});

// @desc    Update a category
// @route   PUT /api/categories/:id
// @access  Private
router.put('/:id', protect, async (req, res) => {
  const { id } = req.params;
  const {
    name,
    teluguName,
    englishName,
    teluguSubtitle,
    englishSubtitle,
    description,
    imageUrl,
    displayOrder,
    isEnabled
  } = req.body;

  try {
    const categoryId = parseInt(id);
    if (isNaN(categoryId)) {
      return res.status(400).json({ message: 'Invalid category ID' });
    }

    const existingCategory = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!existingCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    const finalEnglish = englishName || name;

    if (finalEnglish && finalEnglish !== existingCategory.name) {
      const nameExists = await prisma.category.findUnique({
        where: { name: finalEnglish },
      });
      if (nameExists) {
        return res.status(400).json({ message: 'Category name already exists' });
      }
    }

    const order = displayOrder !== undefined ? parseInt(displayOrder) : existingCategory.displayOrder;

    const category = await prisma.category.update({
      where: { id: categoryId },
      data: {
        name: finalEnglish || existingCategory.name,
        teluguName: teluguName !== undefined ? teluguName : existingCategory.teluguName,
        englishName: finalEnglish || existingCategory.englishName,
        teluguSubtitle: teluguSubtitle !== undefined ? teluguSubtitle : existingCategory.teluguSubtitle,
        englishSubtitle: englishSubtitle !== undefined ? englishSubtitle : existingCategory.englishSubtitle,
        description: description !== undefined ? description : existingCategory.description,
        imageUrl: imageUrl !== undefined ? imageUrl : existingCategory.imageUrl,
        displayOrder: order,
        isEnabled: isEnabled !== undefined ? isEnabled : existingCategory.isEnabled,
      },
    });

    req.app.get('io')?.emit('website:data-updated', { type: 'categories' });
    res.json(category);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error updating category' });
  }
});

// @desc    Delete a category
// @route   DELETE /api/categories/:id
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  const { id } = req.params;

  try {
    const categoryId = parseInt(id);
    if (isNaN(categoryId)) {
      return res.status(400).json({ message: 'Invalid category ID' });
    }

    const existingCategory = await prisma.category.findUnique({
      where: { id: categoryId },
    });

    if (!existingCategory) {
      return res.status(404).json({ message: 'Category not found' });
    }

    await prisma.category.delete({
      where: { id: categoryId },
    });

    req.app.get('io')?.emit('website:data-updated', { type: 'categories' });
    res.json({ message: 'Category and all its medicines deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error deleting category' });
  }
});

export default router;
