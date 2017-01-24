const request = require('request');
const options = {
  method: 'get',
  url: 'https://randomuser.me/api/'
}

request.get(options.url, function(err, response, body) {
  if (!err && response.statusCode === 200) {
    const data = JSON.parse(body);
    console.dir(data, {depth: null, colors: true});
    process.exit();
  }
});
