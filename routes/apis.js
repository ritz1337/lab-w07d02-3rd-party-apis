const express = require('express');
const router = express.Router();
const randomWord = require('../lib/randomword');
const randomuser = require('../lib/randomuser');
const trivia = require('../lib/trivia');
const exchange = require('../lib/exchange');
const recipes = require('../lib/recipes');
const github = require('../lib/github');

router.get('/randomword', (req, res) => {
  randomWord.get( word => res.json({word}) );
});

router.get('/randomuser', (req, res) => {
  randomuser.get( (user) => {
    res.json({user});
  });
});

// GET /trivia?n=1
router.get('/trivia', (req, res) => {
  const {n} = req.query;
  trivia.get( (trivia) => {
    res.json({trivia});
  })
});

// GET /exchange?amount=50
router.get('/exchange', (req, res) => {
  const amount = parseInt(req.query.amount);
  exchange.get( (data) => {
    for (let rate in data.rates) {
      data.rates[rate] = data.rates[rate] * amount;
    }
    res.json({data});
  })
});

router.get('/recipes/search', (req, res) => {
  const {q} = req.query;
  recipes.search(q, (results) => {
    res.json({recipes: results});
  })
});

router.get('/github/:profileName', (req, res) => {
  const {profileName} = req.params;
  github.get(profileName, (profile) => {
    res.json(profile);
  });
});

module.exports = router;
