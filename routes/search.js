const express = require('express');
const { findSauveteursByName } = require('../models/Sauveteur');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    findSauveteursByName(req.query.q).then(value => {res.render('recherche', {resultats: value})})
});
  
module.exports = router;
