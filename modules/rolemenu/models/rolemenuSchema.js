const {Sequelize,DataTypes,Model}  = require('sequelize');
const {sequelize} = require('../../../config/db');


exports.Rolemenu = sequelize.define('rolemenu', {
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  idmenu: {type:DataTypes.INTEGER},
  idrole: {type:DataTypes.INTEGER}
},{
  indexes:[
    {
      fields:['idrole','idmenu']
    }
  ]
});
