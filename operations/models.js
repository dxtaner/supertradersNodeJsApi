const Client = require('../models/Client.js');
const Portfolio = require('../models/Portfolio');
const Stock = require('../models/Stock');

const clients = [
    { username: 'Dylon', balance: 10000 },
    { username: 'Sami', balance: 5000 },
    { username: 'Marata', balance: 7500 },
    { username: 'Brown', balance: 20000 },
    { username: 'Alai', balance: 3300 }
];

const portfolios = [
    { clientId: 1, description: "Portfolio 1" },
    { clientId: 2, description: "Portfolio 2" },
    { clientId: 3, description: "Portfolio 3" },
    { clientId: 4, description: "Portfolio 4" },
    { clientId: 5, description: "Portfolio 5" },
];

const stocks = [
    { symbol: 'AAP', price: 17.39 },
    { symbol: 'GSA', price: 14.14 },
    { symbol: 'FAD', price: 23.49 },
    { symbol: 'SAD', price: 18.92 },
    { symbol: 'ZXX', price: 7.26 },
    { symbol: 'DAP', price: 3.39 },
    { symbol: 'GOG', price: 7.44 },
    { symbol: 'AMN', price: 12.93 },
    { symbol: 'MST', price: 8.42 },
    { symbol: 'FBD', price: 19.64 },
];

const allCreate = () => {
    try {
        Client.bulkCreate(clients);
        console.log('added clients successfully');
        Portfolio.bulkCreate(portfolios);
        console.log('added portfolios successfully');
        Stock.bulkCreate(stocks);
        console.log('added stocks successfully');

    } catch (error) {
        console.error('Error adding', error);
    }
};

const allDestroy =  () => {
    try {
        Stock.destroy({ where: {} });
        console.log('All Stocks deleted successfully');
        Portfolio.destroy({ where: {} });
        console.log('All Portfolios deleted successfully');
        Client.destroy({ where: {} });
        console.log('All clients deleted successfully');
    } catch (error) {
        console.error('Error adding', error);
    }
}


module.exports = {
    allCreate, allDestroy
}