const express = require('express');
const app = express();
const db = require('./config/mongoose');
//import router
const routes = require('./routes/index');

const PORT = 80;

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//static folder
app.use(express.static('./assets'));

//middleware to parse form data
app.use(express.urlencoded({extended: true}));

//route
app.use('/', routes);




app.listen(PORT, (err)=>{
    if(err){
        console.log('Error: ', err);
    }
    else{
        console.log('Server running fine  on port: ', PORT);
    }
});