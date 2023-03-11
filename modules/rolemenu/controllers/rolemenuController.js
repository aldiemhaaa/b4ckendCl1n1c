const crud = require('../../templates/crud');
const RolemenuSchema = require('../models/rolemenuSchema');


RolemenuSchema.Rolemenu.sync();
exports.create = (req, res) => {
  return crud.create(RolemenuSchema.Rolemenu,req.body,res);
};

exports.getAll = (req, res) => {
  return crud.getAll(RolemenuSchema.Rolemenu,res);
};

exports.update = (req, res) => {
  return crud.updateById(RolemenuSchema.Rolemenu,req.params.id,req.body,res);
};

exports.delete = (req, res) => {
  return crud.delete(RolemenuSchema.Rolemenu,req.params.id,res);
};

exports.getById = (req,res) =>{
  return crud.getById(RolemenuSchema.Rolemenu,req.params.id,res);
}
