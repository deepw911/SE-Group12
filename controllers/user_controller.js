const User = require('../models/user');
module.exports.signin = (req, res)=>{
    res.render('user_signin.ejs', {
        title: 'Collaborate: Sign In'
    });
}

module.exports.signup = (req, res)=>{
    res.render('user_signup.ejs', {
        title: 'Collaborate: Sign Up'
    })
}

module.exports.createUser = (req, res)=>{
    //if password doesn't match with confirm password 
    if(req.body.password!=req.body.confirmPassword)
    {
        console.log('passwords doesnt match.');
        return res.redirect('back');
    }
    else{ //if password matches

        //finding if user already exists
        User.findOne({email: req.body.email}, (err, userdata)=>{
            if(err){console.log('error occured while finding user'); return;}
            else{
                //if user with given email doesn't exist create account
                if(!userdata)
                {
                    User.create({

                        name: req.body.name,
                        email: req.body.email,
                        password: req.body.password

                    }, (err, newUser)=>{

                        if(err){console.log('error in creating user'); return;}

                        console.log('**', newUser);
                        return res.redirect('/users/signin');

                    })
                }
                else{  //if user with given mail exists
                    console.log('user already exists with this  mail id.');
                    return res.redirect('back');
                }
            }
        })
    }

}

module.exports.createSession = (req, res)=>{
    return res.send('<h3>Logged In</h3>');
}