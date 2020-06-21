const mongoose = require("../connections/mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  id_network: { type: String },
  username: { type: String, required: true, index: { unique: true } },
  email: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String },
});

let User = mongoose.model("users", usersSchema);

module.exports = User;
