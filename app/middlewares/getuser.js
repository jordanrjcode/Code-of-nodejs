const User = require("../models/users");
const getUserMiddleware = function (req, res, next) {
  User.findOne({ id_network: req.user.id }, function (err, user) {
    req.user = user;
    next();
  });
};

module.exports = getUserMiddleware;
