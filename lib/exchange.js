var request = require('request');

request('http://api.fixer.io/latest', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    const data = JSON.parse(body)
    // console.log(body) // Show the HTML for the Google homepage.
    console.log(data)
    console.log(data.rates)
    console.log(data.rates.USD)

  }
})
