//Este es un paton de diseño refenciado lo que haremos es establecer una especie de relacion entre un collection y otra
const mongoose = require("../connections/mongoose");
const Schema = mongoose.Schema;
const questionSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "users" }, //Aqui definimos el tipo que va a se el id de un objeto que va a estar en otra collection y establecemos a que collection se va a referenciar
  title: { type: String },
  content: { type: String },
});

const Question = mongoose.model("questions", questionSchema);
module.exports = Question;
