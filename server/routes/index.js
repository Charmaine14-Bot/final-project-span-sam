// server/routes/index.js
const express = require('express');
const router = express.Router();

// Import route files
const authRoutes = require('./auth.routes');
const userRoutes = require('./user.routes');
const serviceRoutes = require('./service.routes');
const quoteRoutes = require('./quote.routes');

// Mount routers
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/services', serviceRoutes);
router.use('/quotes', quoteRoutes);

module.exports = router;