const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

const Client = sequelize.define('Client', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      len: [3, 20]
    }
  },
  balance: {
    type: DataTypes.FLOAT,
    allowNull: false,
    defaultValue: 1000.00
  },
},);

Client.sync({})

module.exports = Client;
