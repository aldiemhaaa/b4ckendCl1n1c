const crud = require('../../templates/crud');
const UserSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');

exports.create = (req, res) => {
  newUser = req.body;
  bcrypt.hash(newUser.password,10).then((pass)=>{
    console.log(newUser.password);
    console.log(pass);
    newUser.password = pass;
    return crud.create(UserSchema,newUser,res);

  });
};

exports.getAll = (req, res) => {
  return crud.getAll(UserSchema,res);
};

exports.update = (req, res) => {
  return crud.updateById(UserSchema,req.params.id,req.body,res);
};

exports.delete = (req, res) => {
  return crud.delete(UserSchema,req.params.id,res);
};


exports.login = (req,res)=>{
  UserSchema.findOne({username:req.body.username})
  .then(user=>{
    if(!user){
      return res.status(400).json({msg:"Username atau password salah"})
    }
    bcrypt.compare(req.body.password,user.password,(err,isMatch)=>{
      if(err) throw err;
      if(!isMatch){
        return res.status(400).json({msg:"Username atau password salah"})
      }
      return res.json({msg:'Success'});
    })
  })
  .catch(err=>console.log(err));

}