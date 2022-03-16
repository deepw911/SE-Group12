const mongoose = require('mongoose');
const MongoUrl = 'mongodb://localhost/collaborate_db';
mongoose.connect(MongoUrl);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error!'));
db.once('open', ()=>{
    console.log('mongo connected');
});

module.exports = db;