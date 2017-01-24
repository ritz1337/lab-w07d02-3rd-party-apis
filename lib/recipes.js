var request = require('request');

function recipes(callback) {
  request('http://www.recipepuppy.com/api/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      // console.log(body) // Show the HTML for the Google homepage.
      console.log(data)
      callback(data)
    }
  })
}

request('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3 ', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    const data = JSON.parse(body)
    // console.log(body) // Show the HTML for the Google homepage.
    console.log(data)

  }
})

request('http://www.recipepuppy.com/api/?i=tomato', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    const data = JSON.parse(body)
    // console.log(body) // Show the HTML for the Google homepage.
    console.log(data)

  }
})

recipes(function(data) {
  console.log(data)
})

module.exports = {
  recipes
}
