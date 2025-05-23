// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signup, login, dashboard } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);
router.get('/dashboard', authMiddleware, dashboard);

module.exports = router;
