import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  clientName: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true
  },
  clientTitle: {
    type: String,
    trim: true
  },
  clientImage: {
    type: String
  },
  content: {
    type: String,
    required: [true, 'Testimonial content is required'],
    trim: true
  },
  rating: {
    type: Number,
    required: [true, 'Rating is required'],
    min: 1,
    max: 5
  },
  serviceCategory: {
    type: String,
    required: [true, 'Service category is required'],
    enum: [
      'Crisis Management',
      'Influence Building',
      'Personal Branding',
      'Publishing',
      'Media Relations',
      'Reputation Management'
    ]
  },
  featured: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  verificationStatus: {
    type: Boolean,
    default: false
  },
  dateGiven: {
    type: Date,
    default: Date.now
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
testimonialSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Add indexes for better query performance
testimonialSchema.index({ featured: 1, status: 1 });
testimonialSchema.index({ serviceCategory: 1, status: 1 });

export default mongoose.model('Testimonial', testimonialSchema);