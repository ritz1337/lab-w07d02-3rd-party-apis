const request = require('request');

function search(query, cb) {
  const url = `http://www.recipepuppy.com/api/?q=${query}&p=3`
  request(url, (err, res, body) => {
    if (!err && res.statusCode === 200) {
      const data = JSON.parse(body);
      cb(data);
    }
  })
}

module.exports = {
  search
}
