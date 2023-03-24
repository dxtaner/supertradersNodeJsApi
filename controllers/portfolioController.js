const Portfolio = require('../models/Portfolio');
const Client = require('../models/Client');

// Get all portfolios
const getAllPortfolio = async (req, res) => {
    try {
        const portfolios = await Portfolio.findAll({ include: [{ model: Client }] });
        return res.status(200).json({ portfolios: portfolios, succces: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error', succces: false });
    }
};

// Add a new portfolio
const createProtfolio = async (req, res) => {
    try {
        const { clientId, description } = req.body;
        
        const client = await Client.findByPk(clientId);
        if (!client) {
            return res.status(404).json({ error: 'Client not found', succces: false });
        }

        const portfolio = await Portfolio.findOne({ where: { clientId } });
        if (portfolio) {
            return res.status(400).json({ error: 'A portfolio for this client already exists', succces: false });
        }

        const newPortfolio = await Portfolio.create({ clientId, description })
        await newPortfolio.save();
        
        return res.status(201).json({ message: 'Portfolio added successfully', portfolio, succces: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Server error', succces: false });
    }
};

module.exports = {
    getAllPortfolio,
    createProtfolio,
};
