import express from 'express';
import { getAllCaseStudies, getCaseStudyById, createCaseStudy, updateCaseStudy, deleteCaseStudy } from '../controllers/caseStudyController.js';
import { authenticateToken, authorizeAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getAllCaseStudies);
router.get('/:id', getCaseStudyById);
router.post('/', authenticateToken, authorizeAdmin, createCaseStudy);
router.put('/:id', authenticateToken, authorizeAdmin, updateCaseStudy);
router.delete('/:id', authenticateToken, authorizeAdmin, deleteCaseStudy);

export { router };