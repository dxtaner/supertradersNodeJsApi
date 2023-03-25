const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Stock = sequelize.define('Stock', {
  symbol: {
    type: DataTypes.STRING(3),
    allowNull: false,
    unique: true,
    validate: {
      is: /^[A-Z]{3}$/
    }
  },
  price: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
    validate: {
      isDecimal: true,
      min: 0,
      max: 9999.99
    }
  }
});

Stock.sync({})

module.exports = Stock;
