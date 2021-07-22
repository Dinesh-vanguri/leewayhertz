const mongoose = require('mongoose');
var book = mongoose.module('book', {
    id: {
        type: String,
        Booktitle: String,
        Authorname: String
    },
});

module.exports = {book};