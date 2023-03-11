const  { Sequelize } = require('sequelize');

exports.sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/klinik') // Example for postgres

  
// module.exports = ConnectDB;