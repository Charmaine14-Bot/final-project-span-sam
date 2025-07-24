const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.ObjectId,
    ref: 'Service',
    required: true
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  provider: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected', 'completed'],
    default: 'pending'
  },
  price: {
    type: Number,
    required: [true, 'Please add a price']
  },
  scheduledDate: {
    type: Date,
    required: [true, 'Please add a scheduled date']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Quote', QuoteSchema);