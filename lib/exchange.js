var request = require('request');
const url = 'http://api.fixer.io/latest'

function exchange(callback) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      // console.log(body) // Show the HTML for the Google homepage.
      console.log(data)
      console.log(data.rates)
      console.log(data.rates.USD)
      callback(data)
    }
  })
}

exchange(function(data) {
  console.log(data)
})

module.exports = {
  exchange
}
