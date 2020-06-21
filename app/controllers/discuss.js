const questionModel = require("../models/question");
const User = require("../models/users");
const logged = require("../middlewares/logged");
const getUser = require("../middlewares/getuser");
const discussController = (server) => {
  server
    .route("/guardar-pregunta")

    .post(logged, getUser, (req, res) => {
      const question = new questionModel({
        user: req.user, //este atributo se esta referenciando a un atributo del modelo de bd users y la variable user utilizada es lo que devuelve la consulta si encuentra el id que pasamos en la collection Users
        title: req.body.title,
        content: req.body.content_question,
      });
      question.save((err) => {
        if (err) {
          console.log("error");
          return;
        }
      });
      res.redirect("/");
    });
};

module.exports = discussController;
