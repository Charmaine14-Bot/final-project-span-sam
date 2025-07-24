const express = require('express');
const router = express.Router({ mergeParams: true });
const {
  getQuotes,
  getQuote,
  createQuote,
  updateQuote,
  deleteQuote
} = require('../controllers/quote.controllers');
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(protect, getQuotes)
  .post(protect, authorize('customer', 'admin'), createQuote);

router
  .route('/:id')
  .get(protect, getQuote)
  .put(protect, authorize('customer', 'admin'), updateQuote)
  .delete(protect, authorize('customer', 'admin'), deleteQuote);

module.exports = router;