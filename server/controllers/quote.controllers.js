const Quote = require('../models/Quote');
const asyncHandler = require('../utils/asyncHandler');
const ErrorResponse = require('../utils/errorResponse');

exports.getQuotes = asyncHandler(async (req, res, next) => {
  let query;

  if (req.user.role === 'customer') {
    query = Quote.find({ customer: req.user._id });
  } else if (req.user.role === 'provider') {
    query = Quote.find({ provider: req.user._id });
  } else {
    query = Quote.find();
  }

  const quotes = await query.populate('customer provider service');
  res.status(200).json({ success: true, count: quotes.length, data: quotes });
});

exports.getQuote = asyncHandler(async (req, res, next) => {
  const quote = await Quote.findById(req.params.id).populate('customer provider service');

  if (!quote) {
    return next(new ErrorResponse(`Quote not found with id ${req.params.id}`, 404));
  }

  res.status(200).json({ success: true, data: quote });
});

exports.createQuote = asyncHandler(async (req, res, next) => {
  const quote = await Quote.create({
    ...req.body,
    customer: req.user._id,
  });

  res.status(201).json({ success: true, data: quote });
});

exports.updateQuote = asyncHandler(async (req, res, next) => {
  const quote = await Quote.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  }).populate('customer provider service');

  if (!quote) {
    return next(new ErrorResponse(`Quote not found with id ${req.params.id}`, 404));
  }

  res.status(200).json({ success: true, data: quote });
});

exports.deleteQuote = asyncHandler(async (req, res, next) => {
  const quote = await Quote.findByIdAndDelete(req.params.id);

  if (!quote) {
    return next(new ErrorResponse(`Quote not found with id ${req.params.id}`, 404));
  }

  res.status(200).json({ success: true, data: {} });
});
