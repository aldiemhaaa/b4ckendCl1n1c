const crud = require('../../templates/crud');
const Profile = require('../models/profileSchema');

Profile.Profile.sync();

exports.create = (req, res) => {
  return crud.create(Profile.Profile,req.body,res);
};

exports.update = (req, res) => {
  return crud.updateById(Profile.Profile,req.params.id,req.body,res);
};

exports.getById = (req,res)=>{
  return crud.getById(Profile.Profile,req.params.id,res);
}