const express = require('express');
const cookieParser = require('cookie-parser')
const expressSession = require('express-session');
const cors = require('cors');

// config
const config = require('../config');

// passport
const passport = require('passport');
const passportLoader = require('./passport');

// routes
const indexRoute = require('../routes/index');
const authRoute = require('../routes/auth');

const { index, auth } = config.routes;

module.exports = (app) => {
    // view engine set 
    app.set('view engine', 'ejs');
    app.set('views', 'views');

    // cors
    app.use(cors({ origin: 'http://localhost:5000' }));

    // static path 
    app.use(express.static('public'));

    // body parser
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // cookie & session
    app.use(cookieParser(config.secrets.cookie));
    app.use(expressSession({
        secret: config.secrets.session,
        resave: true,
        saveUninitialized: true,
    }));

    passportLoader(passport);
    app.use(passport.initialize());
    app.use(passport.session());

    // routes 
    app.use(index, indexRoute);
    app.use(auth, authRoute);
}