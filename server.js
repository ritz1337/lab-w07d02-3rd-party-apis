const express = require('express');
const bodyParser = require('body-parser');
const apis = require('./routes/apis');
const index = require('./routes/index');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use('/', index);
app.use('/', apis);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


