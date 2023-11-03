const Sequelize = require('sequelize');

const sequelize = new Sequelize('productdb', 'postgres', 'root', {
    dialect: 'postgres',
    host: 'localhost',
});

module.exports = sequelize;
