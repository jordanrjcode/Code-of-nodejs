const User = require("../models/users");
const userController = function (server) {
  server
    .route("/logout")

    .get((req, res) => {
      req.logout();
      res.redirect("/");
    });

  server
    .route("/extra-data")

    .get(async (req, res) => {
      const user = await User.findOne({ id_network: req.user.id });
      if (!user) {
        res.render("user/extra-data");
      } else {
        res.redirect("/");
        return;
      }
    })
    .post((req, res) => {
      let user = new User({
        id_network: req.user.id,
        username: req.body.username,
        email: req.body.email,
        firstName: req.user.name.givenName,
        lastName: req.user.name.familyName,
      });
      user.save(function (err) {
        if (err) {
          console.log(err);
          return;
        }
      });
    });
};

module.exports = userController;
