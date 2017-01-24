var request = require('request');

// node randomuser.js returns json of an array of a random user info
request('https://randomuser.me/api/', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
