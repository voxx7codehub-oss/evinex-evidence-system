import express from 'express';
import { authenticate, authorize } from '../middleware/auth';

const router = express.Router();

// Get audit logs - ADMIN only
router.get('/', [
  authenticate,
  authorize('ADMIN')
], (req, res) => {
  res.json({ message: 'Get audit logs endpoint - to be implemented' });
});

// Get audit log by ID - ADMIN only
router.get('/:id', [
  authenticate,
  authorize('ADMIN')
], (req, res) => {
  res.json({ message: 'Get audit log endpoint - to be implemented' });
});

export default router;
