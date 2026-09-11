import express from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { body } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';

const router = express.Router();

// Get all cases
router.get('/', authenticate, (req, res) => {
  res.json({ message: 'Get cases endpoint - to be implemented' });
});

// Create case - ADMIN only
router.post('/', [
  authenticate,
  authorize('ADMIN'),
  body('caseNumber').notEmpty(),
  body('title').notEmpty(),
  body('description').optional()
], validateRequest, (req, res) => {
  res.json({ message: 'Create case endpoint - to be implemented' });
});

// Get case by ID
router.get('/:id', authenticate, (req, res) => {
  res.json({ message: 'Get case endpoint - to be implemented' });
});

// Update case - ADMIN only
router.put('/:id', [
  authenticate,
  authorize('ADMIN')
], (req, res) => {
  res.json({ message: 'Update case endpoint - to be implemented' });
});

export default router;
