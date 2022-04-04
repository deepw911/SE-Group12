const express = require('express');
const router = express.Router();
const boardController = require('../controllers/board_controller');
const passport = require('../config/passport-local-strategy');

router.post('/', passport.checkAuthentication, boardController.createBoard);

module.exports = router;