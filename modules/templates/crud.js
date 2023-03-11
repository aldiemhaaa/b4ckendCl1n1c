const Hashids = require('hashids/cjs')
const hashids = new Hashids('',10);

exports.encodeId = async (id)=>{
  return hashids.encode(id);
}

exports.decodeId = async (hashed)=>{
  return hashids.decode(hashed);
}

exports.create = async (models,data,res) => {
    const newData = await models.create(data);
    return res.json(newData);
};
  
exports.getAll = async (models, res) => {
  let newData = await models.findAll();
  return res.status(200).json(newData)
};

exports.updateById = (models,where,data, res) => {
  models.update(
    data,{
    where:{
      id:where
    }
  })
    .then(() => res.json({ success: true }))
    .catch(err => console.error(err));
};

exports.delete = (models,id, res) => {
  models.destroy({
    where:{
      id:id
    }
  })
    .then(() => res.json({ success: true }))
    .catch(err => console.error(err));
};

exports.getById = (models,id,res)=>{
  models.findByPk(id).then((user)=>res.json(user))
  .catch(error=>{
    res.json('Gagal')
  })
}