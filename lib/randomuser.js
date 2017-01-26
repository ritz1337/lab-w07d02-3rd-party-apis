const request = require('request')
const url = 'https://randomuser.me/api/';

function get(dothiswhenever) {
  request(url, (err, res, body) => {
    if (!err && res.statusCode === 200) {
      const data = JSON.parse(body);
      const user = data.results[0];
      dothiswhenever(user);
    }
  })
}

module.exports = {
  get
}
