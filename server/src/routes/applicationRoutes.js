import express from 'express';
import Application from '../models/Application.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name, email, roles } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required.' });
    }
    const application = await Application.create({ ...req.body, roles: roles || [] });
    res.json({ success: true, data: application });
  } catch (error) {
    next(error);
  }
});

export default router;
