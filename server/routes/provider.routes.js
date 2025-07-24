const express = require('express');
const router = express.Router();
const {
  getProviders,
  getProvider,
  updateProvider
} = require('../controllers/providers.controllers');
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(getProviders);

router
  .route('/:id')
  .get(getProvider)
  .put(protect, authorize('provider', 'admin'), updateProvider);

module.exports = router;