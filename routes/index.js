const express = require('express');
const router = express.Router();

router.get('/random', (req, res) => {
  res.render('random', {});
});

router.get('/game', (req, res) => {
  res.render('game', {});
});

router.get('/money', (req, res) => {
  res.render('money', {});
});

router.get('/hungry', (req, res) => {
  res.render('hungry', {});
});

router.get('/dev', (req, res) => {
  res.render('dev', {});
});

router.post('/sample', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
