const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoleSchema = new Schema({
  nama: { type: String, required: true },
});

const UserSchema = new Schema({
  nama: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: RoleSchema, required: true },
});

module.exports = mongoose.model('user', UserSchema);
