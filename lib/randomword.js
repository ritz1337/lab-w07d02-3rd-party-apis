var request = require('request');
const url = 'http://randomword.setgetgo.com/get.php'
// google html on running nodemon randomword.js
// request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log(body) // Show the HTML for the Google homepage.
//   }
// })

// random word in node
// node randomword.js or nodemon randomword.js

function get(callback) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console.log(body) // Show the HTML for the Google homepage.
      callback(body);
    }
  })
}

// get(function(data) {

// })

module.exports = {
  get
}
