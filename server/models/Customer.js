const mongoose = require('mongoose');
const User = require('./User');

const CustomerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  location: {
    // GeoJSON Point
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true,
      index: '2dsphere'
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String
  },
  favorites: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Service'
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Cascade delete quotes when a customer is deleted
CustomerSchema.pre('remove', async function(next) {
  await this.model('Quote').deleteMany({ customer: this._id });
  next();
});

module.exports = mongoose.model('Customer', CustomerSchema);