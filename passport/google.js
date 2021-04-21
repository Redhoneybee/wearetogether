const GoogleStrategy = require('passport-google-oauth2').Strategy;

const config = require('../config');

module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: config.oauths.google.id,
        clientSecret: config.oauths.google.secret,
        callbackURL: config.oauths.google.callback,
    }, (accessToken, refreshToken, profile, done) => {

        return done(null, profile);
    }));
}