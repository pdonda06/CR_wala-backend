import CaseStudy from '../models/CaseStudy.js';

export const getAllCaseStudies = async (req, res) => {
  try {
    const caseStudies = await CaseStudy.find({ status: 'published' }).sort('-createdAt');
    res.json({ success: true, data: caseStudies });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getCaseStudyById = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findById(req.params.id);
    if (!caseStudy) {
      return res.status(404).json({ success: false, message: 'Case study not found' });
    }
    res.json({ success: true, data: caseStudy });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createCaseStudy = async (req, res) => {
  try {
    const newCaseStudy = new CaseStudy(req.body);
    await newCaseStudy.save();
    res.status(201).json({ success: true, data: newCaseStudy });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const updateCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!caseStudy) {
      return res.status(404).json({ success: false, message: 'Case study not found' });
    }
    res.json({ success: true, data: caseStudy });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findByIdAndDelete(req.params.id);
    if (!caseStudy) {
      return res.status(404).json({ success: false, message: 'Case study not found' });
    }
    res.json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};