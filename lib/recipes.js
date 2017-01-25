var request = require('request');

// var query = 'salad'

// const url = 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3'

// const url = 'http://www.recipepuppy.com/api/?q=${query}&p=3

// function get(callback) {
//   request('http://www.recipepuppy.com/api/', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       const data = JSON.parse(body)
//       // console.log(body) // Show the HTML for the Google homepage.
//       console.log(data)
//       callback(data)
//     }
//   })
// }

function search(query, cb) {
  const url = `http://www.recipepuppy.com/api/?q=${query}&p=3`
    request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      // console.log(body) // Show the HTML for the Google homepage.
      cb(data)
    }
  })
}

// request('http://www.recipepuppy.com/api/?i=tomato', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     const data = JSON.parse(body)
//     // console.log(body) // Show the HTML for the Google homepage.
//     console.log(data)

//   }
// })

// get(function(data) {
//   console.log(data)
// })

module.exports = {
  search
}
