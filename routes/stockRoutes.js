const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController.js');

// Get all Stocks
router.get('/', stockController.getAllStocks);

// Create a new stock
router.post('/', stockController.createStock);

// update a stock
router.patch('/:id', stockController.updateStock);

module.exports = router;
