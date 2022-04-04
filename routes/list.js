const express = require('express');
const router = express.Router();
const listController = require('../controllers/list_controller');
const passport = require('../config/passport-local-strategy');

// Create a list
router.post('/',passport.chechAuthentication, listController.createList);



module.exports = router;