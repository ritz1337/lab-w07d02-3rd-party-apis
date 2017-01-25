// var request = require('request');

// // var options = {
// //   url: 'https://api.github.com/users/ritz1337',
// //   headers: {
// //     'User-Agent': 'request'
// //   }
// // };



// // function callback(err, res, body) {
// //   if (!err && res.statusCode == 200) {
// //   var info = JSON.parse(body);
// //   console.log(info);
// //   }
// // }


// function get(callback) {
//   var options = {
//     url: 'https://api.github.com/users/ritz1337',
//     headers: {
//     'User-Agent': 'request'
//   }
// }

//   request(options, function(error, response, body) {
//     console.log(body);
//   });
// };



// module.exports = {
//   get
// };


// phil sol:

const request = require('request');

const options = {
  url: 'https://api.github.com/users/ritz1337',
  headers: {
    'User-Agent': 'request'
  }
};

function get(callback) {
  request(options, (err, res, body) => {
    console.log(body);
    //https://www.npmjs.com/package/request#custom-http-headers
    if (!err && res.statusCode === 200) {
      const data = JSON.parse(body);
      console.log(data)
      callback(data)
    }
  })
}

module.exports = {
  get
}



