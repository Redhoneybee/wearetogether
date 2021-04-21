const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {

    if (req.session.passport) {
        // login...
        const { user } = req.session.passport;

        const name = user.displayName;
        res.render('index', { name });
    } else {
        //  logout,...
        res.render('index');
    }
});

module.exports = router;