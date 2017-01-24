const request = require('request');
const url = 'http://www.setgetgo.com/randomword/get.php';

request.get(url, (err, response, body) => {
  if (!err && response.statusCode === 200) {
    console.log(body);
  }
})
