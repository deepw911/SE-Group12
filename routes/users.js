const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controller');
const passport = require('../config/passport-local-strategy');

router.get('/signin', userController.signin);
router.get('/signup', userController.signup);

router.get('/profile', userController.profile);

router.post('/create-session', passport.authenticate('local', {
    failureRedirect: '/users/signin'
}), userController.createSession);

router.post('/create-user', userController.createUser);

module.exports = router;