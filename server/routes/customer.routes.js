const express = require('express');
const router = express.Router();
const {
  getCustomers,
  getCustomer,
  updateCustomer,
  deleteCustomer
} = require('../controllers/customers.controllers');
const { protect, authorize } = require('../middleware/auth');

router
  .route('/')
  .get(protect, authorize('admin'), getCustomers);

router
  .route('/:id')
  .get(protect, authorize('admin'), getCustomer)
  .put(protect, authorize('admin'), updateCustomer)
  .delete(protect, authorize('admin'), deleteCustomer);

module.exports = router;