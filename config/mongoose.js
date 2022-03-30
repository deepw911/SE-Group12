const mongoose = require('mongoose');
const MongoUrl = 'mongodb://localhost/collaborate_db';
const atlasUrl = 'mongodb+srv://collaborate_se:collaborate1234@cluster0.vtouc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(MongoUrl);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error!'));
db.once('open', ()=>{
    console.log('mongo connected');
});

module.exports = db;