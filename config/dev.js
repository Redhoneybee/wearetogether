
module.exports = {
    // server port
    port: process.env.PORT || 5000,

    // secrets
    secrets: {
        cookie: process.env.COOKIE_SECRET,
        session: process.env.SESSION_SECRET,
    },

    // routes
    routes: {
        index: '/',
        auth: '/auth',
    },

    // oauths
    oauths: {
        google: {
            id: process.env.OAUTH_GOOGLE_ID,
            secret: process.env.OAUTH_GOOGLE_SECRET,
            callback: process.env.OAUTH_GOOGLE_CALLBACK,
        },
    },
}