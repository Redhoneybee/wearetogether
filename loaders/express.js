const express = require('express');
const cookieParser = require('cookie-parser')
const expressSession = require('express-session');

// config
const config = require('../config');

// routes
const indexRoute = require('../routes/index');

const { index } = config.routes;

module.exports = (app) => {
    // view engine set 
    app.set('view engine', 'ejs');
    app.set('views', 'views');

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

    // routes 
    app.use(index, indexRoute);

}