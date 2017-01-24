const request = require('request');
const url = 'http://api.fixer.io/latest?base=USD';

request.get(url, (err, response, body) => {
  const data = JSON.parse(body);
  console.log(data);
})
