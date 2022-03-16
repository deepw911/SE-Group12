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