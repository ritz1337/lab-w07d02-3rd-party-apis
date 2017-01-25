const randomUser = require('./randomuser.js')
const recipes = require('./recipes.js')
const exchange = require('./exchange.js')
const trivia = require('./trivia.js')

const github = require('./github.js')

randomUser.get(function(data){
  console.log(data);
})

recipes.search('soup', function(data) {
  console.log(data);
});

exchange.get(function(data) {
  console.log(data);
})

trivia.get(function (data) {
  console.log(data);
})

github.get(function(data) {
  console.log(data);
})
