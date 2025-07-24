const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../utils/asyncHandler');
const User = require('../models/User');

// @desc    Get all customers
// @route   GET /api/v1/customers
// @access  Private/Admin
exports.getCustomers = asyncHandler(async (req, res, next) => {
  const customers = await User.find({ role: 'customer' });

  res.status(200).json({
    success: true,
    count: customers.length,
    data: customers
  });
});

// @desc    Get single customer
// @route   GET /api/v1/customers/:id
// @access  Private/Admin
exports.getCustomer = asyncHandler(async (req, res, next) => {
  const customer = await User.findOne({ 
    _id: req.params.id, 
    role: 'customer' 
  });

  if (!customer) {
    return next(
      new ErrorResponse(`Customer not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: customer
  });
});

// @desc    Update customer
// @route   PUT /api/v1/customers/:id
// @access  Private/Admin
exports.updateCustomer = asyncHandler(async (req, res, next) => {
  const customer = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { 
      new: true,
      runValidators: true 
    }
  );

  if (!customer || customer.role !== 'customer') {
    return next(
      new ErrorResponse(`Customer not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: customer
  });
});

// @desc    Delete customer
// @route   DELETE /api/v1/customers/:id
// @access  Private/Admin
exports.deleteCustomer = asyncHandler(async (req, res, next) => {
  const customer = await User.findByIdAndDelete(req.params.id);

  if (!customer || customer.role !== 'customer') {
    return next(
      new ErrorResponse(`Customer not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: {}
  });
});