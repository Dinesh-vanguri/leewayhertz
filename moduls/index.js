const express = require('express');
const bodyparser = require('bodyparser');
const mongoose = require('mongoose');
const { mongoose } = require('/database.js');

var book = require('../manager/bookmanager.js');
var app = express();

app.use(bodyparser.json());
app.use(cors ({
    origin: '*'
}));

app.listen(3000);
console.log('Server started at port:3000');

app.use('/book', book);

module.exports = mongoose;