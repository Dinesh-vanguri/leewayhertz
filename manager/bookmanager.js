const express = require('express');
var router = express.router();
var objectId = require('mongoose').Types.objectId;

var {book} = require('../moduls/book');
var uniqid = require('uniqid');

router.get('/', (req, res) => {
    console.log(uniqid);
    book.find((err, docs) => {
        if(!err) {
            res.send(docs);
        }
        else {
            console.log('error in retriving Employee:' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = mongoose;