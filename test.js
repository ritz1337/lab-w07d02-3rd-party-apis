const exchange = require('../lib/exchange.js');
const github = require('../lib/github.js');
const randomuser = require('../lib/randomuser.js');
const randomword = require('../lib/randomword.js');
const recipes = require('../lib/recipes.js');
const trivia = require('../lib/trivia.js');

exchange.get( (resp) => {
  console.log(resp);
});

trivia.get( (resp) => {
  console.log(resp);
})

github.get( 'fat', (resp) => {
  console.log(resp);
});

randomword.get( (resp) => {
  console.log(resp);
});

randomuser.get( (resp) => {
  console.log(resp);
});

recipes.search('soup', (resp) => {
  console.log(resp);
});
