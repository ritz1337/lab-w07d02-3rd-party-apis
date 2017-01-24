
var request = require('request');
const url = 'https://www.opentdb.com/api.php?amount=10'
// node trivia.js returns 10 questions in an object

function trivia(callback) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      // console.log(body) // Show the HTML for the Google homepage.
      console.log(data)
      callback(data)

    }
  })
}

trivia(function(data) {
  console.log(data);
})

module.exports = {
  trivia
}
