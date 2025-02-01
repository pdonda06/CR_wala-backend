import express from 'express';
import { getAllServices, getServiceById, createService, updateService, deleteService } from '../controllers/serviceController.js';
import { authenticateToken, authorizeAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllServices);
router.get('/:id', getServiceById);
router.post('/', authenticateToken, authorizeAdmin, createService);
router.put('/:id', authenticateToken, authorizeAdmin, updateService);
router.delete('/:id', authenticateToken, authorizeAdmin, deleteService);

export { router };