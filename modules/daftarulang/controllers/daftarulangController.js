const crud = require('../../templates/crud');
const DaftarulangSchema = require('../models/daftarulangSchema');
DaftarulangSchema.Daftarulang.sync();

exports.create = (req, res) => {
  return crud.create(DaftarulangSchema.Daftarulang,req.body,res);
};

// exports.getAll = (req, res) => {
//   return crud.getAll(DaftarulangSchema.Daftarulang,res);
// };
exports.getById = (req,res)=>{
  return crud.getById(DaftarulangSchema.Daftarulang,req.params.id,res);
}

exports.getByNoReg = (req,res)=>{
  return DaftarulangSchema.Daftarulang.find({
    where:{
      noreg:req.params.id
    }
  }).then((user)=>res.json(user))
  .catch(error=>{
    res.json(error)
  });
}

exports.getByNoRm = (req,res)=>{
  return DaftarulangSchema.Daftarulang.find({
    where:{
      norm:req.params.id
    }
  }).then((user)=>res.json(user))
  .catch(error=>{
    res.json(error)
  });
}


exports.getByTglKunjungan = (req,res)=>{
  return DaftarulangSchema.Daftarulang.find({
    where:{
      tglkunjungan:req.params.id
    }
  }).then((user)=>res.json(user))
  .catch(error=>{
    res.json(error)
  });
}

exports.getByPoli = (req,res)=>{
  return DaftarulangSchema.Daftarulang.find({
    where:{
      poli:req.params.id
    }
  }).then((user)=>res.json(user))
  .catch(error=>{
    res.json(error)
  });
}

exports.getByDokter = (req,res)=>{
  return DaftarulangSchema.Daftarulang.find({
    where:{
      dokter:req.params.id
    }
  }).then((user)=>res.json(user))
  .catch(error=>{
    res.json(error)
  });
}

exports.update = (req, res) => {
  return crud.updateById(DaftarulangSchema.Daftarulang,req.params.id,req.body,res);
};

exports.delete = (req, res) => {
  return crud.delete(DaftarulangSchema.Daftarulang,req.params.id,res);
};
