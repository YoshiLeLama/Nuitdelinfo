const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', async (req, res, next) => {
  res.render('missions',)});

router.get('/:id', async (req, res, next) => {
    findMissionById(req.params.id).then(missions => res.render('mission', {data:missions}))
})

module.exports = router;
