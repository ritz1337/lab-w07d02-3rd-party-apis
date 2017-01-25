const request = require('request');

// https://www.npmjs.com/package/request#custom-http-headers

function get(user, cb) {
  const options = {
    url: `https://api.github.com/users/${user}`,
    headers: {
      'User-Agent': 'whatevs'
    }
  };
  request(options, (err, res, body) => {
    console.log(body);
    if (!err && res.statusCode === 200) {
      const data = JSON.parse(body);
      cb(data);
    }
  });
}

module.exports = {
  get
}
