


const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/sleeper_login');

mongoose.connect('mongodb://127.0.0.1:27017/crud1');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));


db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;