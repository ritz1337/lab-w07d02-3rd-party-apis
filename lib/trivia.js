const request = require('request');
const url = 'https://opentdb.com/api.php?amount=10';

function get(cb) {
  request.get(url, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      const data = JSON.parse(body);
      cb(data);
    }
  });
}

module.exports = {
  get
}
