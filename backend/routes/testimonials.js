import express from 'express';
import prisma from '../utils/db.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @desc    Get all testimonials
// @route   GET /api/testimonials
// @access  Public
router.get('/', async (req, res) => {
  try {
    const testimonials = await prisma.testimonial.findMany({
      orderBy: { displayOrder: 'asc' },
    });
    res.json(testimonials);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching testimonials' });
  }
});

// @desc    Create a testimonial
// @route   POST /api/testimonials
// @access  Private
router.post('/', protect, async (req, res) => {
  const { name, content, rating, imageUrl, displayOrder, isActive } = req.body;

  if (!name || !content) {
    return res.status(400).json({ message: 'Name and content are required' });
  }

  try {
    const testimonial = await prisma.testimonial.create({
      data: {
        name,
        content,
        rating: rating !== undefined ? parseInt(rating) : 5,
        imageUrl: imageUrl || '',
        displayOrder: displayOrder !== undefined ? parseInt(displayOrder) : 0,
        isActive: isActive !== undefined ? !!isActive : true,
      },
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'testimonials' });
    res.status(201).json(testimonial);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error creating testimonial' });
  }
});

// @desc    Update a testimonial
// @route   PUT /api/testimonials/:id
// @access  Private
router.put('/:id', protect, async (req, res) => {
  const { id } = req.params;
  const { name, content, rating, imageUrl, displayOrder, isActive } = req.body;

  try {
    const testimonialId = parseInt(id);
    if (isNaN(testimonialId)) {
      return res.status(400).json({ message: 'Invalid testimonial ID' });
    }

    const existing = await prisma.testimonial.findUnique({
      where: { id: testimonialId },
    });

    if (!existing) {
      return res.status(404).json({ message: 'Testimonial not found' });
    }

    const data = {};
    if (name !== undefined) data.name = name;
    if (content !== undefined) data.content = content;
    if (rating !== undefined) data.rating = parseInt(rating);
    if (imageUrl !== undefined) data.imageUrl = imageUrl;
    if (displayOrder !== undefined) data.displayOrder = parseInt(displayOrder);
    if (isActive !== undefined) data.isActive = !!isActive;

    const updated = await prisma.testimonial.update({
      where: { id: testimonialId },
      data,
    });

    req.app.get('io')?.emit('website:data-updated', { type: 'testimonials' });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error updating testimonial' });
  }
});

// @desc    Delete a testimonial
// @route   DELETE /api/testimonials/:id
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  const { id } = req.params;

  try {
    const testimonialId = parseInt(id);
    if (isNaN(testimonialId)) {
      return res.status(400).json({ message: 'Invalid testimonial ID' });
    }

    await prisma.testimonial.delete({
      where: { id: testimonialId },
    });

    req.app.get('io')?.emit('website:data-updated', { type: 'testimonials' });
    res.json({ message: 'Testimonial deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error deleting testimonial' });
  }
});

export default router;
