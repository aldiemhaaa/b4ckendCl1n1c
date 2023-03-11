const crud = require('../../templates/crud');
const UserroleSchema = require('../models/userroleSchema');


UserroleSchema.Userrole.sync();
exports.create = (req, res) => {
  return crud.create(UserroleSchema.Userrole,req.body,res);
};

exports.getAll = (req, res) => {
  return crud.getAll(UserroleSchema.Userrole,res);
};

exports.update = (req, res) => {
  return crud.updateById(UserroleSchema.Userrole,req.params.id,req.body,res);
};

exports.delete = (req, res) => {
  return crud.delete(UserroleSchema.Userrole,req.params.id,res);
};

exports.getById = (req,res) =>{
  return crud.getById(UserroleSchema.Userrole,req.params.id,res);
}
