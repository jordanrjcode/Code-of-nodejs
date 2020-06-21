const homeController = (server) => {
  server
    .route("/")

    .get((req, res) => {
      if (req.user) {
        console.log(req.user);
        let user = req.user._json.name;
        let urlPhoto = "http://graph.facebook.com/" + req.user.id + "/picture";
        res.render("home/index", {
          user: user,
          photo: urlPhoto,
        });
      } else {
        res.render("home/index");
      }
    });
};

module.exports = homeController;
