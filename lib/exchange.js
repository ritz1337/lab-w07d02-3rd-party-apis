const request = require('request');

function get(cb, base='USD') {
  const url = `http://api.fixer.io/latest?base=${base}`;
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const data = JSON.parse(body);
      cb(data);
    }
  });
}

module.exports = {
  get
}
