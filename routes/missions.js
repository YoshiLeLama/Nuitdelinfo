const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const {findMissionById, findNMissions} = require('../models/Mission')

/* GET home page. */
router.get('/', async (req, res, next) => {
  findNMissions(10).then(missions => res.render('missions',{missions,lang: req.cookies.lang}));
})

router.get('/:id', async (req, res, next) => {
    findMissionById(req.params.id).then(missions => res.render('mission', {data:missions, lang: req.cookies.lang}))
})

module.exports = router;
