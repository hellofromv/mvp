var express = require('express');
var app = express();
var port = 3000;
// var home = require('');
var breeds = require('./router/dogRouter');

app.use(express.static('./client'));
// app.use('/', home);
app.use('/breeds', breeds);

app.listen(port);