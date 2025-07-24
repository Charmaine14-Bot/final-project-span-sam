const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} = require('../controllers/users.controllers');
const { protect, authorize } = require('../middleware/auth');
const { validateUser, validateUpdateUser } = require('../middleware/validation');

router
  .route('/')
  .get(protect, authorize('admin'), getUsers)
  .post(protect, authorize('admin'), validateUser, createUser);

router
  .route('/:id')
  .get(protect, authorize('admin'), getUser)
  .put(protect, authorize('admin'), validateUpdateUser, updateUser)
  .delete(protect, authorize('admin'), deleteUser);

module.exports = router;