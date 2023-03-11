const {Sequelize,DataTypes,Model}  = require('sequelize');
const {sequelize} = require('../../../config/db');

exports.Profile = sequelize.define('profile', {
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  motto: {
    type: DataTypes.STRING,
    allowNull: false
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false
  },
  akses: {
    type: DataTypes.STRING,
    allowNull: false
  },
  bridging: {
    type: DataTypes.JSONB,
    allowNull: true
  },
  notelp: {
    type: DataTypes.STRING,
    allowNull: false
  },
  version: {
    type: DataTypes.STRING
  }
}, {
  indexes:[
    {
      unique:true,
      fields:['id','nama']
    }
  ]
});
