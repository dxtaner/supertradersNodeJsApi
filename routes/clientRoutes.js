const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

// Get all clients
router.get('/', clientController.getAllClients);

// Create a new client
router.post('/', clientController.createClient);


module.exports = router;
