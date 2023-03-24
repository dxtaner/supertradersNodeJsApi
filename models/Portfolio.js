const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');
const Client = require('./Client.js');

const Portfolio = sequelize.define('Portfolio', {
  clientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Client,
      key: 'id',
    },
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "PortFolio"
  }
});

Portfolio.belongsTo(Client, { foreignKey: 'clientId' });

Portfolio.sync({});

module.exports = Portfolio;
