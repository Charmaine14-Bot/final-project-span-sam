const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/ErrorResponse");
const crypto = require('crypto');

// Register User
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new ErrorResponse("Email already in use", 400);
  }

  const user = await User.create({ name, email, password, role });
  const token = user.getSignedJwtToken();

  res.status(201).json({ success: true, token });
});

// Login User
exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user) {
    throw new ErrorResponse("Invalid credentials", 401);
  }

  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    throw new ErrorResponse("Invalid credentials", 401);
  }

  const token = user.getSignedJwtToken();
  res.status(200).json({ success: true, token });
});

// Logout User
exports.logout = asyncHandler(async (req, res) => {
  res.cookie('token', 'none', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  res.status(200).json({ success: true, data: {} });
});

// Get Current User
exports.getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({ success: true, data: user });
});

// Update User Details
exports.updateDetails = asyncHandler(async (req, res) => {
  const fieldsToUpdate = {
    name: req.body.name,
    email: req.body.email
  };

  const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
    new: true,
    runValidators: true
  });
  res.status(200).json({ success: true, data: user });
});

// Update Password
exports.updatePassword = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select('+password');

  if (!(await user.matchPassword(req.body.currentPassword))) {
    throw new ErrorResponse('Password is incorrect', 401);
  }

  user.password = req.body.newPassword;
  await user.save();
  res.status(200).json({ success: true, data: user });
});

// Forgot Password
exports.forgotPassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    throw new ErrorResponse('No user with that email', 404);
  }

  const resetToken = user.getResetPasswordToken();
  await user.save({ validateBeforeSave: false });

  // TODO: Implement email sending logic here
  res.status(200).json({ success: true, data: resetToken });
});

// Reset Password
exports.resetPassword = asyncHandler(async (req, res) => {
  const resetPasswordToken = crypto
    .createHash('sha256')
    .update(req.params.resettoken)
    .digest('hex');

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() }
  });

  if (!user) {
    throw new ErrorResponse('Invalid token', 400);
  }

  user.password = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;
  await user.save();

  res.status(200).json({ success: true, data: user });
});