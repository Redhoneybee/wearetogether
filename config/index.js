const dotenv = require('dotenv');

const foundDotEnv = dotenv.config();

if (foundDotEnv.error) throw new Error(`Couldn't find dotenv`);

process.env.NODE_ENV = process.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'development') module.exports = require('./dev');
else if (process.env.NODE_ENV === 'production') module.exports = require('./prod');
