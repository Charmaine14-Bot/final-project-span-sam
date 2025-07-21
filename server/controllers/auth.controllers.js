const User = require("../models/User");
const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/ErrorResponse");

exports.register = asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  // Check if user exists
  const exists = await User.findOne({ email });
  if (exists) throw new ErrorResponse("Email already in use", 400);

  // Create user
  const user = await User.create({ email, password, role });

  // Generate token
  const token = user.generateToken();

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    })
    .json({ success: true, user });
});

exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Find user
  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.authenticate(password))) {
    throw new ErrorResponse("Invalid credentials", 401);
  }

  // Generate token
  const token = user.generateToken();

  res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    })
    .json({ success: true, user });
});

exports.logout = (req, res) => {
  res.clearCookie("token").json({ success: true });
};

exports.getMe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  res.json({ success: true, user });
});
