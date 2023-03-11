const crud = require('../../templates/crud');
const PasienSchema = require('../models/pasienSchema');
const {Op} = require('sequelize');

PasienSchema.Pasien.sync();
exports.create = (req, res) => {
  return crud.create(PasienSchema.Pasien,req.body,res);
};

exports.update = (req, res) => {
  return crud.updateById(PasienSchema.Pasien,req.params.id,req.body,res);
};

exports.delete = (req, res) => {
  return crud.delete(PasienSchema.Pasien,req.params.id,res);
};

exports.getByPk = (req,res)=>{
  return crud.getById(PasienSchema.Pasien,req.params.id,res);
}

exports.pencarianpasien = async (req,res)=>{
  // check jika inputan contains number -> No. MR
  // sebaliknya => nama
  var hasNumber = /\d/;
  wheres = {}
  if(hasNumber.test(req.params.id)){
    wheres = {
      norm:{
        [Op.like]: `%${req.params.id}`
      }
    }
  }else{
    wheres = {
      nama:{
        [Op.like]: `${req.params.id.toUpperCase()}%`
      }
    }
  }
  console.log(wheres);



  const newData = await PasienSchema.Pasien.findAll({
    where:wheres
  });
  return res.json(newData);  
};