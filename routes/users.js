const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const passport = require('../config/passport-local-strategy');

router.get('/signin', passport.isSigned, userController.signin);
router.get('/signup', passport.isSigned, userController.signup);
router.get('/signout', userController.signout);

router.get('/profile', passport.checkAuthentication, userController.profile);

router.post('/create-session', passport.authenticate('local', {
    failureRedirect: '/users/signin'
}), userController.createSession);

router.post('/create-user', userController.createUser);

module.exports = router;