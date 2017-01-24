const request = require('request');
const url = 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3';

request.get(url, (err, response, body) => {
  if (!err && response.statusCode === 200) {
    const data = JSON.parse(body);
    console.dir(data, {colors: true});
  }
});
