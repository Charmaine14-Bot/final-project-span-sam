const mongoose = require('mongoose');
const User = require('./User');

const ProviderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  businessName: {
    type: String,
    required: [true, 'Please add a business name']
  },
  description: {
    type: String,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  services: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Service'
  }],
  experience: {
    type: Number,
    min: [0, 'Experience cannot be negative']
  },
  certifications: [String],
  availability: {
    type: String,
    enum: ['available', 'unavailable', 'limited'],
    default: 'available'
  },
  rating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [5, 'Rating cannot be more than 5']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Cascade delete services when a provider is deleted
ProviderSchema.pre('remove', async function(next) {
  await this.model('Service').deleteMany({ provider: this._id });
  next();
});

module.exports = mongoose.model('Provider', ProviderSchema);