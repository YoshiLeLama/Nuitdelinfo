const cookieParser = require('cookie-parser');
const express = require('express');
const { findNSauveteurs, findSauveteurById } = require('../models/Sauveteur');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
    findNSauveteurs(10).then(sauveteurs => res.render('sauveteurs', { sauveteurs, lang: req.cookies.lang }));
});

router.get('/:id', async (req, res, next) => {
    findSauveteurById(req.params.id).then(sauveteur => res.render('sauveteur', { data: sauveteur, lang: req.cookies.lang }))
})
  
module.exports = router;
