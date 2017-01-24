const request = require('request');
const url = 'https://opentdb.com/api.php?amount=10';

request.get(url, (err, response, body) => {
  if (!err && response.statusCode === 200) {
    const data = JSON.parse(body);
    console.dir(data, {colors: true});
  }
});
