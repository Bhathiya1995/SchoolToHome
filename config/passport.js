const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Parent = mongoose.model("parents");
const keys = require("../config/keys");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretKey;

module.exports = passport => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Parent.findById(jwt_payload.id)
        .then(parent => {
          if (parent) {
            console.log(parent);
            return done(null, parent);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
