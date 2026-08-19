import express from 'express';
import prisma from '../utils/db.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// @desc    Get all navigation items
// @route   GET /api/navigation
// @access  Public
router.get('/', async (req, res) => {
  try {
    const navItems = await prisma.navigationItem.findMany({
      orderBy: { displayOrder: 'asc' },
    });
    res.json(navItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error fetching navigation items' });
  }
});

// @desc    Create a navigation item
// @route   POST /api/navigation
// @access  Private
router.post('/', protect, async (req, res) => {
  const { name, url, displayOrder, isActive } = req.body;

  if (!name || !url) {
    return res.status(400).json({ message: 'Name and url are required' });
  }

  try {
    const navItem = await prisma.navigationItem.create({
      data: {
        name,
        url,
        displayOrder: displayOrder !== undefined ? parseInt(displayOrder) : 0,
        isActive: isActive !== undefined ? !!isActive : true,
      },
    });
    req.app.get('io')?.emit('website:data-updated', { type: 'navigation' });
    res.status(201).json(navItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error creating navigation item' });
  }
});

// @desc    Update a navigation item
// @route   PUT /api/navigation/:id
// @access  Private
router.put('/:id', protect, async (req, res) => {
  const { id } = req.params;
  const { name, url, displayOrder, isActive } = req.body;

  try {
    const navId = parseInt(id);
    if (isNaN(navId)) {
      return res.status(400).json({ message: 'Invalid navigation ID' });
    }

    const existing = await prisma.navigationItem.findUnique({
      where: { id: navId },
    });

    if (!existing) {
      return res.status(404).json({ message: 'Navigation item not found' });
    }

    const data = {};
    if (name !== undefined) data.name = name;
    if (url !== undefined) data.url = url;
    if (displayOrder !== undefined) data.displayOrder = parseInt(displayOrder);
    if (isActive !== undefined) data.isActive = !!isActive;

    const updated = await prisma.navigationItem.update({
      where: { id: navId },
      data,
    });

    req.app.get('io')?.emit('website:data-updated', { type: 'navigation' });
    res.json(updated);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error updating navigation item' });
  }
});

// @desc    Delete a navigation item
// @route   DELETE /api/navigation/:id
// @access  Private
router.delete('/:id', protect, async (req, res) => {
  const { id } = req.params;

  try {
    const navId = parseInt(id);
    if (isNaN(navId)) {
      return res.status(400).json({ message: 'Invalid navigation ID' });
    }

    await prisma.navigationItem.delete({
      where: { id: navId },
    });

    req.app.get('io')?.emit('website:data-updated', { type: 'navigation' });
    res.json({ message: 'Navigation item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error deleting navigation item' });
  }
});

export default router;
