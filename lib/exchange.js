var request = require('request');
const url = 'http://api.fixer.io/latest?base=USD'

function get(callback) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      // console.log(body) // Show the HTML for the Google homepage.
      // console.log(data)
      // console.log(data.rates)
      // console.log(data.rates.USD)
      // console.log(data);
      callback(data)
    }
  })
}


// get(function(data) {
//   console.log(data)
//   console.log(data.rates.AUD)
// })

module.exports = {
  get
}
