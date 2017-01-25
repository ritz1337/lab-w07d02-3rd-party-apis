const request = require('request');
const url = 'http://randomword.setgetgo.com/get.php';

function get(cb) {
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      cb(body);
    }
  });
}

module.exports = {
  get
}
