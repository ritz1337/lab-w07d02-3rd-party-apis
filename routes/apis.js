const express = require('express');
const router = express.Router();
const randomWord = require('../lib/randomword');
const randomUser = require('../lib/randomuser');
const trivia = require('../lib/trivia');
const exchange = require('../lib/exchange');
const recipes = require('../lib/recipes');
const github = require('../lib/github');

router.get('/randomword', (req, res) => {
  // send back JSON with a random word from `randomword.js`
  randomWord.get( word => res.json({word: word}) );
});

router.get('/randomuser', (req, res) => {
  // send back JSON with a random user's data from `randomuser.js`
  randomUser.get( (user) => {
    res.json({user});
  });
});

// GET /trivia?n=1
router.get('/trivia', (req, res) => {
  const {n} = req.query;
  // send back JSON with all the trivia questions from 'trivia.js'
  // send back JSON a single trivia question from 'trivia.js'
  trivia.get( (trivia) => {
    res.json({trivia: trivia});
  })
});

// GET /exchange?amount=50
router.get('/exchange', (req, res) => {
  const {amount} = req.query;
  // send back JSON of that amount in different currencies from 'exchange.js'
  exchange.get( (rates) => {
    res.json({rates: rates});
  })
});

router.get('/recipes/search', (req, res) => {
  // send back JSON search results from 'recipes.js'
  const {q} = req.query;
  recipes.search(q, (results) => {
    res.json({recipes: results});
  })
});

router.get('/github/:profileName', (req, res) => {
  // send back JSON of that github profile
  const {profileName} = req.params;
  github.get(profileName, (profile) => {
    res.json(profile);
  });
});

module.exports = router;
