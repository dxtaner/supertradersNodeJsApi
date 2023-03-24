const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolioController.js');

// Get all portfolios
router.get('/', portfolioController.getAllPortfolio);

// Create a new portfolio
router.post('/', portfolioController.createProtfolio);


module.exports = router;
