import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      'Crisis Management',
      'Influence Building',
      'Personal Branding',
      'Publishing',
      'Media Relations',
      'Reputation Management'
    ]
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  features: [{
    type: String,
    required: true
  }],
  benefits: [{
    type: String
  }],
  icon: {
    type: String,
    required: [true, 'Icon is required']
  },
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
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
serviceSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Add index for better query performance
serviceSchema.index({ category: 1, isActive: 1 });

export default mongoose.model('Service', serviceSchema);