import express from 'express';
import prisma from '../utils/db.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @desc    Get all benefits
// @route   GET /api/benefits
// @access  Public
router.get('/', async (req, res) => {
  try {
    const benefits = await prisma.benefit.findMany({
      orderBy: { displayOrder: 'asc' },
    });
    res.json(benefits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching benefits' });
  }
});

// @desc    Create a benefit
// @route   POST /api/benefits
// @access  Private
router.post('/', protect, async (req, res) => {
  const { title, description, imageUrl, displayOrder, isActive } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  try {
    const benefit = await prisma.benefit.create({
      data: {
        title,
        description,
        imageUrl: imageUrl || '',
        displayOrder: displayOrder !== undefined ? parseInt(displayOrder) : 0,
        isActive: isActive !== undefined ? !!isActive : true,
      },
    });
    res.status(201).json(benefit);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error creating benefit' });
  }
});

// @desc    Update a benefit
// @route   PUT /api/benefits/:id
// @access  Private
router.put('/:id', protect, async (req, res) => {
  const { id } = req.params;
  const { title, description, imageUrl, displayOrder, isActive } = req.body;

  try {
    const benefitId = parseInt(id);
    if (isNaN(benefitId)) {
      return res.status(400).json({ message: 'Invalid benefit ID' });
    }

    const existing = await prisma.benefit.findUnique({
      where: { id: benefitId },
    });

    if (!existing) {
      return res.status(404).json({ message: 'Benefit not found' });
    }

    const data = {};
    if (title !== undefined) data.title = title;
    if (description !== undefined) data.description = description;
    if (imageUrl !== undefined) data.imageUrl = imageUrl;
    if (displayOrder !== undefined) data.displayOrder = parseInt(displayOrder);
    if (isActive !== undefined) data.isActive = !!isActive;

    const updated = await prisma.benefit.update({
      where: { id: benefitId },
      data,
    });

    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error updating benefit' });
  }
});

// @desc    Delete a benefit
// @route   DELETE /api/benefits/:id
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  const { id } = req.params;

  try {
    const benefitId = parseInt(id);
    if (isNaN(benefitId)) {
      return res.status(400).json({ message: 'Invalid benefit ID' });
    }

    await prisma.benefit.delete({
      where: { id: benefitId },
    });

    res.json({ message: 'Benefit deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error deleting benefit' });
  }
});

export default router;
