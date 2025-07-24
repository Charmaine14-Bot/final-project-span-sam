const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../utils/asyncHandler');
const User = require('../models/User');
const Service = require('../models/Service');

// @desc    Get all providers
// @route   GET /api/v1/providers
// @access  Public
exports.getProviders = asyncHandler(async (req, res, next) => {
  const providers = await User.find({ role: 'provider' })
    .select('-password')
    .populate('services');

  res.status(200).json({
    success: true,
    count: providers.length,
    data: providers
  });
});

// @desc    Get single provider
// @route   GET /api/v1/providers/:id
// @access  Public
exports.getProvider = asyncHandler(async (req, res, next) => {
  const provider = await User.findOne({ 
    _id: req.params.id, 
    role: 'provider' 
  })
    .select('-password')
    .populate('services');

  if (!provider) {
    return next(
      new ErrorResponse(`Provider not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: provider
  });
});

// @desc    Update provider
// @route   PUT /api/v1/providers/:id
// @access  Private/Admin/Provider
exports.updateProvider = asyncHandler(async (req, res, next) => {
  let provider = await User.findById(req.params.id);

  if (!provider || provider.role !== 'provider') {
    return next(
      new ErrorResponse(`Provider not found with id of ${req.params.id}`, 404)
    );
  }

  // Make sure user is provider owner or admin
  if (provider._id.toString() !== req.user.id && req.user.role !== 'admin') {
    return next(
      new ErrorResponse(
        `User ${req.user.id} is not authorized to update this provider`,
        401
      )
    );
  }

  provider = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: provider
  });
});