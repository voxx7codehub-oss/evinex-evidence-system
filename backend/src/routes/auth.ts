import express from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middleware/validateRequest';

const router = express.Router();

// TODO: Implement auth controller

router.post('/login', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
], validateRequest, (req, res) => {
  res.json({ message: 'Login endpoint - to be implemented' });
});

router.post('/logout', (req, res) => {
  res.json({ message: 'Logout successful' });
});

export default router;
