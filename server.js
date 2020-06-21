const express = require("express");
const swig = require("swig");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const server = express();

swig.setDefaults({
  cache: false,
});

server.use(bodyparser.urlencoded({ extended: false }));
// Configurar sesiones de express
server.use(cookieParser());
server.use(
  session({
    secret: "miClavexd",
    resave: false,
    saveUninitialized: false,
  })
);

// Config passport
server.use(passport.initialize());
server.use(passport.session());

// serializadores de las sesiones de passport
passport.serializeUser(function (user, done) {
  done(null, user); //esto se guarda en req.user
});
// deserializacion de usuario
passport.deserializeUser(function (user, done) {
  done(null, user);
});

//Configurando el motror de plantilla
server.engine("html", swig.renderFile);
server.set("view engine", "html");

server.set("views", __dirname + "/app/views");
server.use(express.static("./public"));

// Controllers
require("./app/controllers/home")(server);
require("./app/controllers/user")(server);
require("./app/controllers/discuss")(server);

// Connections
require("./app/connections/facebook")(server);
require("./app/connections/twitter")(server);

server.listen(3000);
