const expressLoader = require('./express');

module.exports = async (app) => {
    // express setting
    await expressLoader(app);
}