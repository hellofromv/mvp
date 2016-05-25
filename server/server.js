var express = require('express');
var app = express();
var port = 3000;
// var breedController = require('../client/app/breeds/breedCtrl.js');
var breeds = require('./router/dogRouter');

app.use(express.static('./client'));
// app.use('/', home);
app.use('/breeds', breeds);

// app.get('/breeds', breedController.getBreeds)


app.listen(port);