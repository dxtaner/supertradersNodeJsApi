const Stock = require('../models/Stock');

const getAllStocks = async (req, res) => {
    try {
        const stocks = await Stock.findAll();
        return res.status(200).json({ stocks: stocks, success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error', success: false });
    }
};

const createStock = async (req, res) => {
    try {
        const { symbol, price } = req.body;
        
        if (!/^[A-Z]{3}$/.test(symbol)) {
            return res.status(400).json({ error: 'Invalid symbol format', success: false });
        }
        
        if (!/^\d+(\.\d{1,2})?$/.test(price)) {
            return res.status(400).json({ error: 'Invalid price format', success: false });
        }
        
        const existingStock = await Stock.findOne({ where: { symbol } });
        if (existingStock) {
            return res.status(400).json({ error: 'Stock already exists', success: false });
        } else {
            const newStock = await Stock.create({ symbol, price });
            await newStock.save();
            return res.status(201).json({ message: 'Stock added successfully', stock: newStock, success: true });
        }
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error', success: false });
    }
};

const updateStock = async (req, res) => {
    try {
        const { id } = req.params;
        const { price } = req.body;
        const stock = await Stock.findByPk(id);
        if (!stock) {
            return res.status(404).json({ error: 'Stock not found', success: false });
        }
        if (!/^\d+(\.\d{1,2})?$/.test(price)) {
            return res.status(400).json({ error: 'Invalid price format', success: false });
        }
        if (price) {
            stock.price = price;
        }
        await stock.save();
        return res.status(200).json({ message: 'Stock updated successfully', stock, success: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error', success: false });
    }
};

module.exports = { getAllStocks, createStock, updateStock };
