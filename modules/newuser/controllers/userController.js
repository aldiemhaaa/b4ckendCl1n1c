const crud = require('../../templates/crud');
const UserSchema = require('../models/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {sequelize} = require('../../../config/db');
const { QueryTypes } = require('sequelize');
UserSchema.Role.sync();
UserSchema.User.sync();
const SECRET = '!OEYIUSDG*(&!(*!UDHSJQDKJSQ'

exports.create = (req, res) => {
  newUser = req.body;
  bcrypt.hash(newUser.password,10).then((pass)=>{
    newUser.password = pass;
    return crud.create(UserSchema.User,newUser,res);

  });
};

exports.getAll = (req, res) => {
  return crud.getAll(UserSchema.User,res);
};

exports.update = (req, res) => {
  return crud.updateById(UserSchema.User,req.params.id,req.body,res);
};

exports.delete = (req, res) => {
  return crud.delete(UserSchema.User,req.params.id,res);
};


exports.login = async (req,res)=>{
  const records  = await sequelize.query(`
  select nama,username,password,menus.title,menus.url,menus.icon from users
  left outer join userroles on userroles.iduser = users.id
  left outer join rolemenus on rolemenus.idrole = userroles.idrole
  left outer join menus on menus.id = rolemenus.idmenu
  where users.username = '${req.body.username}'`,{
    nest: true,
    type: QueryTypes.SELECT
  });
  if(!records[0]){
    return res.status(400).json({msg:'Username atau password salah'})
  }
  bcrypt.compare(req.body.password , records[0]['password'],(err,isMatch)=>{
    if(err) throw err;
    if(!isMatch){
      return res.status(400).json({msg:"Username atau password salah"})
    }
    // create a JWT with the user ID and secret
    const token = jwt.sign({ username: req.body.username }, SECRET, { expiresIn: '1d' });
    menus = []
    records.map((e)=>{
      menus.push({
        title:e['title'],
        url:e['url'],
        icon:e['icon']
      });
    });

    return res.json({
      metadata:{
        code:200,
        message:'Ok'
      },
      response:{
        token:token,
        menu:menus
      }
    })
  })
}