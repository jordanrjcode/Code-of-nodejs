const passport = require("passport");
const facebookStrategy = require("passport-facebook").Strategy;
const facebookConnection = function (server) {
  passport.use(
    new facebookStrategy(
      {
        clientID: "1492476377582134",
        clientSecret: "3c5bc363fcb05fab1b2492ba5d3f4707",
        callbackURL: "http://localhost:3000/auth/facebook/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        console.log(profile);
        done(null, profile);
      }
    )
  );
  server.get("/auth/facebook", passport.authenticate("facebook"));
  server.get(
    "/auth/facebook/callback",
    passport.authenticate("facebook", {
      successRedirect: "/extra-data", //En esta url le voy a pedir el username y el email del usuario
      failureRedirect: "/error",
    })
  );
};

module.exports = facebookConnection;
