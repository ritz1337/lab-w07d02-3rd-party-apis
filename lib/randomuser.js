const request = require('request')
const url = 'https://randomuser.me/api/';

function get(dothiswhenever) {
  return new Promise( resolve => {
    request(url, (err, res, body) => {
      if (!err && res.statusCode === 200) {
        const data = JSON.parse(body);
        const user = data.results[0];
        resolve(user);
      }
    });
  })
}

module.exports = {
  get
}
