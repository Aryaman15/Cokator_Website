import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import applicationRoutes from './routes/applicationRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req, res) => {
  res.send('CoKrator Content Solutions API');
});

app.use('/api/contact', contactRoutes);
app.use('/api/applications', applicationRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cokrator';

connectDB(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to connect DB', err);
    process.exit(1);
  });
