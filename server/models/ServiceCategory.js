const mongoose = require('mongoose');

const ServiceCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a category name'],
    unique: true,
    trim: true,
    maxlength: [50, 'Category name cannot be more than 50 characters']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  icon: {
    type: String,
    default: 'default-category-icon.svg'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Reverse populate with virtuals
ServiceCategorySchema.virtual('services', {
  ref: 'Service',
  localField: '_id',
  foreignField: 'category',
  justOne: false
});

// Cascade delete services when a category is deleted
ServiceCategorySchema.pre('remove', async function(next) {
  await this.model('Service').updateMany(
    { category: this._id },
    { $unset: { category: '' } }
  );
  next();
});

module.exports = mongoose.model('ServiceCategory', ServiceCategorySchema);