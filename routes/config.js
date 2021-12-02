const express = require('express');
const { setLanguageCookie } = require('../controllers/language_config');
const router = express.Router();

/* GET home page. */
router.get('/lang/:code', function(req, res, next) {
    setLanguageCookie(res, req.params.code)
    res.redirect(req.query.q)
});

module.exports = router;
