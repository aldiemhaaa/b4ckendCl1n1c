const {Sequelize,DataTypes,Model}  = require('sequelize');
const {sequelize} = require('../../../config/db');


exports.Role = sequelize.define('role', {
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  nama: {type:DataTypes.STRING},
});
