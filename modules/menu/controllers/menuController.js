const crud = require('../../templates/crud');
const MenuSchema = require('../models/menuSchema');


MenuSchema.Menu.sync();
exports.create = (req, res) => {
  return crud.create(MenuSchema.Menu,req.body,res);
};

exports.getAll = (req, res) => {
  return crud.getAll(MenuSchema.Menu,res);
};

exports.update = (req, res) => {
  return crud.updateById(MenuSchema.Menu,req.params.id,req.body,res);
};

exports.delete = (req, res) => {
  return crud.delete(MenuSchema.Menu,req.params.id,res);
};

exports.getById = (req,res) =>{
  return crud.getById(MenuSchema.Menu,req.params.id,res);
}
