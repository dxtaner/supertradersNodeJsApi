const Trade = require('../models/Trade');
const Portfolio = require('../models/Portfolio');
const Stock = require('../models/Stock');
const Client = require('../models/Client');

const sellShares = async (req, res) => {
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

        const trades = await Trade.findAll({
            where: { PortfolioId:portfolioId, StockId:stockId }
        });

  
        if (!trades || trades.length === 0) {
            return res.status(400).json({ error: 'No trades found for the given portfolio and stock', success: false });
        }

        let boughtQuantity = 0;
        let soldQuantity = 0;
        for (const trade of trades) {
            if (trade.type === 'BUY') {
                boughtQuantity += trade.quantity;
            } else if (trade.type === 'SELL') {
                soldQuantity += trade.quantity;
            }
        }
    
        const availableQuantity = boughtQuantity - soldQuantity;
        if (quantity > availableQuantity) {
            return res.status(400).json({ error: 'Insufficient quantity to sell', success: false });
        }

        const totalPrice = (stock.price * quantity).toFixed(2);
        const client = await Client.findByPk(portfolioId);
        client.balance = (parseFloat(client.balance) + parseFloat(totalPrice)).toFixed(2);

        await client.save();

        const trade = await Trade.create({
            type: 'SELL',
            totalprice: totalPrice,
            quantity: quantity,
            PortfolioId: portfolioId,
            StockId: stockId,
        });

        await trade.save();
        return res.status(201).json({ message: 'Stock sold successfully', trade, success: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error', success: false });
    }
};

module.exports = {
    sellShares,
};
