const express = require('express');
const { findSauveteursByName } = require('../models/Sauveteur');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sauveteurs du Dunkerquois', lang: req.cookies.lang});
});

router.get('/test/:nom', (req, res, next) => {
  findSauveteursByName(req.params.nom).then(value => {res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'}); res.write(JSON.stringify(value)); res.end();})
});

module.exports = router;
