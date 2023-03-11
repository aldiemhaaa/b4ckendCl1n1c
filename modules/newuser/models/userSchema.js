const {Sequelize,DataTypes,Model}  = require('sequelize');
const {sequelize} = require('../../../config/db');

exports.Role = sequelize.define('role',{
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
},{
  indexes:[
    {
      unique:true,
      fields:['id']
    }
  ]
})


exports.User = sequelize.define('user', {
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  nama: {type:DataTypes.STRING},
  username : {type:DataTypes.STRING,unique:true},
  password : {type:DataTypes.STRING},

}, {
  indexes:[
    {
      unique:true,
      fields:['id','username']
    }
  ]
});
