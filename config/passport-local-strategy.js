const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');


/* Manadatory functions of passport */
//middleware to authenticate
passport.use(new LocalStrategy({
    usernameField: 'email'
  },
      function(email, password, done) {
          //finding the user
        User.findOne({ email: email }, function (err, user) {
            //if theres an error
          if (err) { console.log('error in mongo'); return done(err, false); }
          //if the user is not found
          if (!user) { console.log('user with this email not found'); 
                      return done(null, false); }
          //if password entered is wrong
          if (user.password!=password) { console.log('password doesnt match');
                                              return done(null, false); }
          //if everything works fine
          console.log('signed in');
          return done(null, user);
        });
      }
    ));

//telling passport what part of user should be used to identify user
passport.serializeUser((user, done)=>{
    done(null, user.id);
});

//finding user by id
passport.deserializeUser((id, done)=>{
 User.findById(id, (err, user)=>{
     if(err){ console.log('error in deserialize'); return done(err);}
     return done(null, user);
 })
});



/* user created functions */

passport.setUser = (req, res, next)=>{
    if(req.isAuthenticated())
  {
    res.locals.user = req.user;
  }
  next();
}


module.exports = passport;