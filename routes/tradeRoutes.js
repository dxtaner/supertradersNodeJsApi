const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController.js');
const buyStockController = require('../controllers/buyStockController.js');
const sellStockController = require('../controllers/sellStockController.js');

// buy stock
router.post('/buyStock', buyStockController.buyShares);

// sell stock
router.post('/sellStock', sellStockController.sellShares);

// get all trade
router.get('/trades', tradeController.getAllTrade);


module.exports = router;
