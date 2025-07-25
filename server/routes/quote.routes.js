const express = require('express');
const router = express.Router();

const {
  getQuotes,
  getQuote,
  createQuote,
  updateQuote,
  deleteQuote,
} = require('../controllers/quote.controllers');

const { protect, authorize } = require('../middleware/auth');
const { validateQuote } = require('../validations/quote.validations');

router.route('/')
  .get(protect, getQuotes)
  .post(protect, authorize('customer', 'admin'), validateQuote, createQuote);

router.route('/:id')
  .get(protect, getQuote)
  .put(protect, authorize('customer', 'admin'), validateQuote, updateQuote)
  .delete(protect, authorize('customer', 'admin'), deleteQuote);

module.exports = router;
