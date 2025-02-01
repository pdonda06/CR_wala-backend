import mongoose from 'mongoose';

const caseStudySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      'Building Business Strategies',
      'Executive PR Campaigns',
      'Social Visibility',
      'PR Strategies'
    ]
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  metrics: {
    type: String,
    required: [true, 'Metrics are required']
  },
  imageUrl: {
    type: String,
    required: [true, 'Image URL is required']
  },
  results: {
    type: Map,
    of: String,
    required: true,
    default: {}
  },
  clientName: {
    type: String,
    required: [true, 'Client name is required']
  },
  duration: {
    type: String,
    required: [true, 'Project duration is required']
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt timestamp before saving
caseStudySchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.model('CaseStudy', caseStudySchema);