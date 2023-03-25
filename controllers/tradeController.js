const Trade = require('../models/Trade');
const Portfolio = require('../models/Portfolio');
const Stock = require('../models/Stock');

const getAllTrade = async (req, res) => {
    try {
        const trades = await Trade.findAll({
            include: [
                {
                    model: Portfolio,
                },
                {
                    model: Stock,
                }
            ]
        });

        return res.status(200).json({ trades: trades, success: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error', success: false });
    }
};

module.exports = {
    getAllTrade
}
