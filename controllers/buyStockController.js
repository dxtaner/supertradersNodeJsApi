const Trade = require('../models/Trade');
const Portfolio = require('../models/Portfolio');
const Stock = require('../models/Stock');
const Client = require('../models/Client');

const buyShares = async (req, res) => {
    try {
        const { portfolioId, stockId, quantity } = req.body;

        const stock = await Stock.findByPk(stockId);
        if (!stock) {
            return res.status(400).json({ error: 'Stock not found', success: false });
        }
        const portfolio = await Portfolio.findByPk(portfolioId);
        if (!portfolio) {
            return res.status(400).json({ error: 'Portfolio not found', success: false });
        }
        if (quantity < 1) {
            return res.status(400).json({ error: 'Quantity cannot be less than 1', success: false });
        }

        const totalPrice = (stock.price * quantity).toFixed(2);
        let client = await Client.findByPk(portfolioId);
        if (client.balance < totalPrice)
            return res.status(400).json({ success: false, error: 'Unsufficient balance error' })

        client.balance = (parseFloat(client.balance) - parseFloat(totalPrice)).toFixed(2);
        client = await client.save();
        // database transaction
        const trade = await Trade.create({
            type: 'BUY',
            totalprice: totalPrice,
            quantity: quantity,
            PortfolioId: portfolioId,
            StockId: stockId,
        });

        await trade.save();
        return res.status(201).json({ message: 'Stock bought successfully', trade, success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error', success: false });
    }
};

module.exports = {
    buyShares
}