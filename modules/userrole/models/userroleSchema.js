const {Sequelize,DataTypes,Model}  = require('sequelize');
const {sequelize} = require('../../../config/db');


exports.Userrole = sequelize.define('userrole', {
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  iduser: {type:DataTypes.INTEGER},
  idrole: {type:DataTypes.INTEGER}
},{
  indexes:[
    {
      fields:['iduser','idrole']
    }
  ]
});
