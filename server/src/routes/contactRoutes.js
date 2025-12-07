import express from 'express';
import ContactLead from '../models/ContactLead.js';

const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required.' });
    }
    const contact = await ContactLead.create(req.body);
    res.json({ success: true, data: contact });
  } catch (error) {
    next(error);
  }
});

export default router;
