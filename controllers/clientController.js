const Client = require('../models/Client');

const createClient = async (req, res) => {
    try {
        const { username, balance } = req.body;

        const existingClient = await Client.findOne({ where: { username } });
        if (existingClient) {
            return res.status(400).json({ message: 'Username already taken', success: false });
        }

        const newClient = await Client.create({
            username,
            balance
        });

        await newClient.save();

        return res.status(201).json({ message: 'Client added successfully', client: newClient, success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }
}

const getAllClients = async (req, res) => {
    try {
        const clients = await Client.findAll({ });
        return res.status(200).json({ clients: clients, success: true });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error', success: false });
    }
};

module.exports = {
    createClient,
    getAllClients
};