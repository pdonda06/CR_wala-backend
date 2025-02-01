import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import { router as authRoutes } from './routes/auth.js'; //done both user and admin
import { router as serviceRoutes } from './routes/services.js'; //done
import { router as caseStudyRoutes } from './routes/caseStudies.js'; //done
import { router as testimonialRoutes } from './routes/testimonials.js'; //done
import { router as contactRoutes } from './routes/contact.js'; //done
import { router as paymentRoutes } from './routes/payments.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/auth', authRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/case-studies', caseStudyRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/payments', paymentRoutes);



// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});