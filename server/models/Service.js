const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a service name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Name cannot be more than 50 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  category: {
    type: String,
    required: [true, 'Please add a category'],
    enum: [
      'cleaning',
      'moving',
      'electrical',
      'plumbing',
      'painting',
      'carpentry',
      'landscaping',
      'appliance',
      'other'
    ]
  },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot be more than 5']
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  estimatedTime: {
    type: Number,
    required: [true, 'Please add estimated time in hours']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  }
});

// Prevent user from submitting more than one service with same name
ServiceSchema.index({ name: 1, user: 1 }, { unique: true });

module.exports = mongoose.model('Service', ServiceSchema);