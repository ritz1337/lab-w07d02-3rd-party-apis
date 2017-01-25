const randomUser = require('./randomuser.js');
const recipes = require('./recipe.js');

randomUser.get( (data) => {
  console.log(data);
});

recipes.search('soup', function(data) {
  console.log(data);
});
