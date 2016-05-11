var express = require('express');
var morgan = require('morgan');
var app = express();
var cors = require('cors');
var port = process.env.PORT || 5000;

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(__dirname));
app.listen(port);
console.log('listening on '+port);

app.get('/', function(req, res) {});
