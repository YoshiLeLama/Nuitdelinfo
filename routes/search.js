const express = require('express');
const { findBoatsByName } = require('../models/Bateau');
const { findMissionsByName } = require('../models/Mission');
const { findSauveteursByName } = require('../models/Sauveteur');
const router = express.Router();

router.get('/', (req, res, next) => {
    findSauveteursByName(req.query.q).then(sauveteurs => {
        findMissionsByName(req.query.q).then(missions => {
            findBoatsByName(req.query.q).then(bateaux => {
                res.render('recherche', {type:"all", sauveteurs, missions, bateaux, lang: req.cookies.lang, q: req.query.q});
            })
        })
    })
})

/* GET home page. */
router.get('/sauveteurs', function(req, res, next) {
    findSauveteursByName(req.query.q).then(value => res.render('recherche', {type: "sauveteurs", resultats: value, lang: req.cookies.lang, q: req.query.q}))
});

router.get('/missions', (req, res, next) => {
    findMissionsByName(req.query.q).then(value => res.render('recherche', {type: "missions", resultats: value, lang: req.cookies.lang, q: req.query.q}))
});

router.get('/bateaux', (req, res, next) => {
    findBoatsByName(req.query.q).then(value => res.render('recherche', {type: "bateaux", resultats: value, lang: req.cookies.lang, q: req.query.q}))
})

module.exports = router;
