var request = require('request');
const url = 'https://randomuser.me/api/'

// node randomuser.js returns json of an array of a random user info

// getting the url returns a json string. parsing the json returns the object
// results is an array, so need to use results[0].email to access the email
// request(url, function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     const data = JSON.parse(body)
//     // console.log(body) // Show the HTML for the Google homepage.
//     console.log(data)
//     console.log(data.results[0].email)
//     console.log(data.results[0].name)
//   }
// })


// as a module, with a return value

function get(dothiswhenever) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      const data = JSON.parse(body)
      console.log(data);
      dothiswhenever(data);
    }
  })
}

// invoke the request
get(function(data){
  console.log(data)
})

module.exports = {
  get
}
