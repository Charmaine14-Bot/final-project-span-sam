const Quote = require("../models/Quote");
const asyncHandler = require("../utils/asyncHandler");
const ErrorResponse = require("../utils/ErrorResponse");

exports.createQuote = asyncHandler(async (req, res) => {
  const quote = await Quote.create({
    ...req.body,
    customer: req.user._id,
  });
  res.status(201).json({ success: true, data: quote });
});

exports.getQuotes = asyncHandler(async (req, res) => {
  let query;

  // Customers see their own quotes
  if (req.user.role === "customer") {
    query = Quote.find({ customer: req.user._id });
  }
  // Providers see quotes for their services
  else if (req.user.role === "provider") {
    query = Quote.find({ provider: req.user._id });
  }
  // Admins see all quotes
  else {
    query = Quote.find();
  }

  const quotes = await query.populate("customer provider service");
  res.json({ success: true, count: quotes.length, data: quotes });
});

exports.updateQuote = asyncHandler(async (req, res) => {
  const quote = await Quote.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  }).populate("customer provider service");

  if (!quote) throw new ErrorResponse("Quote not found", 404);

  res.json({ success: true, data: quote });
});
