const {Sequelize,DataTypes,Model}  = require('sequelize');
const {sequelize} = require('../../../config/db');


exports.Menu = sequelize.define('menu', {
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  title: {type:DataTypes.STRING},
  url: {type:DataTypes.STRING},
  icon: {type:DataTypes.STRING},
},{
  indexes:[
    {
      fields:['id']
    }
  ]
});
