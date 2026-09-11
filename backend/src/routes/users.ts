import express from 'express';
import { authenticate, authorize } from '../middleware/auth';
import { body } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';

const router = express.Router();

// Get all users - ADMIN only
router.get('/', [
  authenticate,
  authorize('ADMIN')
], (req, res) => {
  res.json({ message: 'Get users endpoint - to be implemented' });
});

// Create user - ADMIN only
router.post('/', [
  authenticate,
  authorize('ADMIN'),
  body('email').isEmail(),
  body('firstName').notEmpty(),
  body('lastName').notEmpty(),
  body('role').isIn(['USER', 'ADMIN', 'LEGAL_OFFICER', 'ADVOCATE']),
  body('password').isLength({ min: 6 })
], validateRequest, (req, res) => {
  res.json({ message: 'Create user endpoint - to be implemented' });
});

// Update user - ADMIN only
router.put('/:id', [
  authenticate,
  authorize('ADMIN')
], (req, res) => {
  res.json({ message: 'Update user endpoint - to be implemented' });
});

// Delete user - ADMIN only
router.delete('/:id', [
  authenticate,
  authorize('ADMIN')
], (req, res) => {
  res.json({ message: 'Delete user endpoint - to be implemented' });
});

export default router;
