const express = require('express');
const app = express();
const db = require('./config/mongoose');
//import router
const routes = require('./routes/index');

const session = require('express-session');
const passport = require('./config/passport-local-strategy');

const PORT = 80;

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//static folder
app.use(express.static('./assets'));

//middleware to parse form data
app.use(express.urlencoded({extended: true}));

//authentication
app.use(session({
    name: 'user_id',
    secret: 'keyishere',  //encryption key
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000*60*100) //in milli seconds
    }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setUser);

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