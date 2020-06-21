const passport = require("passport");
const twitterStrategy = require("passport-twitter").Strategy;
const twitterConnection = function (server) {
  passport.use(
    new twitterStrategy(
      {
        consumerKey: "gYktGl686yuOKGG2ljVINXD50",
        consumerSecret: "0F4hSvTcovJ9uZhDtdkBGhCUNMNzZ2QZs4Madr9QeKEymQ923m",
        callbackURL: "http://localhost:3000/auth/twitter/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        console.log(profile);
        done(null, profile);
      }
    )
  );
  server.get("/auth/twitter", passport.authenticate("twitter"));
  server.get(
    "/auth/twitter/callback",
    passport.authenticate("twitter", {
      successRedirect: "/",
      failureRedirect: "/error",
    })
  );
};

module.exports = twitterConnection;
