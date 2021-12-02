const express = require('express');
const { findNSauveteurs, findSauveteurById } = require('../models/Sauveteur');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
    findNSauveteurs(10).then(sauveteurs => {console.log(sauveteurs);res.render('sauveteurs', { sauveteurs })});
});

router.get('/:id', async (req, res, next) => {
    findSauveteurById(req.params.id).then(sauveteur => res.render('sauveteur', { data: sauveteur }))
})
  
module.exports = router;
