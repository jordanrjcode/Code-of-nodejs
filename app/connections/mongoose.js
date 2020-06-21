const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/jordan", {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then((db) => console.log("La base de datos ha sido conectada"))
  .catch((err) => console.log(err));

module.exports = mongoose;
