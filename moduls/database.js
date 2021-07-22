const mongoose = require('mongoose');
mongoose.connect('mongodb');

if(!err)console.log('MongoDB connection success.');
else console.log('Error in DataBase connection.' + JSON.stringify(err, undefined, 2));


module.exports = mongoose;