const express = require('express')
const randomUser = require('./lib/randomuser.js')
const recipes = require('./lib/recipes.js')
const exchange = require('./lib/exchange.js')
const trivia = require('./lib/trivia.js')
const github = require('./lib/github.js')
const path = require('path')
const hbs = require('express-handlebars');
const randomWord = require('./lib/randomword.js')
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', hbs({
 extname: 'hbs',
 defaultLayout: 'main',
 layoutsDir: __dirname + '/views/layouts/'
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/random', function(req, res, next) {
  res.render('random', {title: 'Random'})
})

app.get('/randomword', function(req, res, next) {
  randomWord.get(function(data) {
    res.send(data)
  })
})

app.get('/randomuser', function(req, res, next) {
  randomUser.get(function(data) {
    res.send(data)
  })
})

app.get('/game', function(req, res, next) {
  res.render('game', {title: 'Game'})
})

app.get('/trivia', function(req, res, next) {
  trivia.get(function(data) {
    res.send(data)
  })
})

app.get('/money', function(req, res, next) {
  res.render('money', {title: 'Exchange'})
})

app.get('/exchange/', function (req, res, next) {
  var value = req.query.amount
  exchange.get(function(data) {
    for (var key in data.rates) {
      data.rates[key] = (data.rates[key] * value).toFixed(2)
    }
    res.send(data.rates);
  })

})

var port = 3000;
app.listen(port, function(){
  console.log("listening on port " + port);
});

