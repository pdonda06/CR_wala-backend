import express from 'express';
import { processPayment } from '../controllers/paymentController.js';

const router = express.Router();
// Route to handle payment
router.post('/payment', processPayment);

export {router};