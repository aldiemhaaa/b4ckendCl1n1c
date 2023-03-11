const crud = require('../../templates/crud');
const RoleSchema = require('../models/roleSchema');


RoleSchema.Role.sync();
exports.create = (req, res) => {
  return crud.create(RoleSchema.Role,req.body,res);
};

exports.getAll = (req, res) => {
  return crud.getAll(RoleSchema.Role,res);
};

exports.update = (req, res) => {
  return crud.updateById(RoleSchema.Role,req.params.id,req.body,res);
};

exports.delete = (req, res) => {
  return crud.delete(RoleSchema.Role,req.params.id,res);
};

exports.getById = (req,res) =>{
  return crud.getById(RoleSchema.Role,req.params.id,res);
}
