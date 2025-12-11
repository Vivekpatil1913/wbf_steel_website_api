const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: 3307,   // 👈 add port here
    dialect: 'mysql',
    logging: false   // 👈 turn off logs
  }
);

module.exports = sequelize;
