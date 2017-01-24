const request = require('request');
const options = {
  method: 'GET',
  url: 'https://api.github.com/users/phlco',
  headers: {
    'User-Agent': 'Philco'
  }
}
request(options, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const data = JSON.parse(body);
    console.dir(data, {colors: true});
    process.exit();
  }
});
