const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const { findNBoats, findBoatsById } = require('../models/Bateau');

/* GET home page. */
router.get('/', async (req, res, next) => {
  findNBoats(10).then(bateaux => res.render('bateaux',{bateaux,lang: req.cookies.lang}));
})

router.get('/:id', async (req, res, next) => {
    findBoatsById(req.params.id).then(bateau => res.render('bateau', {data:bateau, lang: req.cookies.lang}))
})

module.exports = router;
