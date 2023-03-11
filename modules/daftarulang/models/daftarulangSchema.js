const {Sequelize,DataTypes,Model}  = require('sequelize');
const {sequelize} = require('../../../config/db');

exports.Daftarulang = sequelize.define('daftarulang', {
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  norm: {
    type: DataTypes.STRING,
    allowNull: false
  },
  noreg: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tglkunjungan: {
    type: DataTypes.DATE,
    allowNull: false
  },
  bayar: {
    type: DataTypes.STRING,
    allowNull: false
  },
  poli: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dokter: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
}, {
  indexes:[
    {
      name:'norm_du_index',
      fields:['norm']
    },
    {
      name:'noreg_du_index',
      fields:['noreg']
    },
    {
      name:'tglkunjungan_du_index',
      fields:['tglkunjungan']
    },
    {
      name:'poli_du_index',
      fields:['poli']
    },
    {
      name:'dokter_du_index',
      fields:['dokter']
    },
    {
      name:'id_du_index',
      fields:['id']
    },
  ]
});