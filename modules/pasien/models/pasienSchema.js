const {Sequelize,DataTypes,Model}  = require('sequelize');
const {sequelize} = require('../../../config/db');

exports.Pasien = sequelize.define('pasien', {
  id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
  norm: {
    type: DataTypes.STRING,
    allowNull: true
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tgllahir: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  jk: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tmptlahir: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nik: {
    type: DataTypes.STRING
  },
  nobpjs: {
    type: DataTypes.STRING
  },
  agama: {
    type: DataTypes.STRING
  },
  stskawin: {
    type: DataTypes.STRING
  },
  goldarah: {
    type: DataTypes.STRING
  },
  kewarganegaraan: {
    type: DataTypes.STRING
  },
  bahasa: {
    type: DataTypes.STRING
  },
  sukubangsa: {
    type: DataTypes.STRING
  },
  rt: {
    type: DataTypes.STRING
  },
  rw: {
    type: DataTypes.STRING
  },
  kelurahan: {
    type: DataTypes.STRING
  },
  kecamatan: {
    type: DataTypes.STRING
  },
  kotakab: {
    type: DataTypes.STRING
  },
  provinsi: {
    type: DataTypes.STRING
  },
  kodepos: {
    type: DataTypes.STRING
  },
  alamat: {
    type: DataTypes.STRING
  },
  pendidikan: {
    type: DataTypes.STRING
  },
  pekerjaan: {
    type: DataTypes.STRING
  },
  nohp: {
    type: DataTypes.STRING
  },
  ayah: {
    type: DataTypes.STRING
  },
  ibu: {
    type: DataTypes.STRING
  },
  suamiistri: {
    type: DataTypes.STRING
  }
}, {
  indexes:[
    {
      unique:true,
      fields:['id','norm','nik','nobpjs']
    }
  ]
});
