import express from 'express';
import prisma from '../utils/db.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @desc    Get all promotions
// @route   GET /api/promotions
// @access  Public
router.get('/', async (req, res) => {
  try {
    const promotions = await prisma.promotion.findMany({
      orderBy: { createdAt: 'desc' },
    });
    res.json(promotions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching promotions' });
  }
});

// @desc    Create a promotion
// @route   POST /api/promotions
// @access  Private
router.post('/', protect, async (req, res) => {
  const { title, description, imageUrl, buttonText, buttonUrl, startDate, endDate, isActive } = req.body;

  if (!title || !description) {
    return res.status(400).json({ message: 'Title and description are required' });
  }

  try {
    const promotion = await prisma.promotion.create({
      data: {
        title,
        description,
        imageUrl: imageUrl || '',
        buttonText: buttonText || '',
        buttonUrl: buttonUrl || '',
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        isActive: isActive !== undefined ? !!isActive : true,
      },
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'promotions' });
    res.status(201).json(promotion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error creating promotion' });
  }
});

// @desc    Update a promotion
// @route   PUT /api/promotions/:id
// @access  Private
router.put('/:id', protect, async (req, res) => {
  const { id } = req.params;
  const { title, description, imageUrl, buttonText, buttonUrl, startDate, endDate, isActive } = req.body;

  try {
    const promotionId = parseInt(id);
    if (isNaN(promotionId)) {
      return res.status(400).json({ message: 'Invalid promotion ID' });
    }

    const existing = await prisma.promotion.findUnique({
      where: { id: promotionId },
    });

    if (!existing) {
      return res.status(404).json({ message: 'Promotion not found' });
    }

    const data = {};
    if (title !== undefined) data.title = title;
    if (description !== undefined) data.description = description;
    if (imageUrl !== undefined) data.imageUrl = imageUrl;
    if (buttonText !== undefined) data.buttonText = buttonText;
    if (buttonUrl !== undefined) data.buttonUrl = buttonUrl;
    if (startDate !== undefined) data.startDate = startDate ? new Date(startDate) : null;
    if (endDate !== undefined) data.endDate = endDate ? new Date(endDate) : null;
    if (isActive !== undefined) data.isActive = !!isActive;

    const updated = await prisma.promotion.update({
      where: { id: promotionId },
      data,
    });

    req.app.get('io')?.emit('website:data-updated', { type: 'promotions' });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error updating promotion' });
  }
});

// @desc    Delete a promotion
// @route   DELETE /api/promotions/:id
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  const { id } = req.params;

  try {
    const promotionId = parseInt(id);
    if (isNaN(promotionId)) {
      return res.status(400).json({ message: 'Invalid promotion ID' });
    }

    await prisma.promotion.delete({
      where: { id: promotionId },
    });

    req.app.get('io')?.emit('website:data-updated', { type: 'promotions' });
    res.json({ message: 'Promotion deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error deleting promotion' });
  }
});

export default router;
