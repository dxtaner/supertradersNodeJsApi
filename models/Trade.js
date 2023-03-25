const { DataTypes } = require('sequelize');
const sequelize = require("../config/database.js");
const Portfolio = require('./Portfolio.js');
const Stock = require('./Stock.js');

const Trade = sequelize.define('Trade', {
  type: {
    type: DataTypes.ENUM('BUY', 'SELL'),
  },
  totalprice: {
    type: DataTypes.FLOAT,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: true
});

Trade.belongsTo(Portfolio, {
  foreignKey: {
    allowNull: false,
  },
});

Trade.belongsTo(Stock, {
  foreignKey: {
    allowNull: false,
  },
});

Trade.sync({});

module.exports = Trade;
