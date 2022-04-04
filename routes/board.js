const express = require('express');
const router = express.Router();
const boardController = require('../controllers/board_controller');
const passport = require('../config/passport-local-strategy');

router.post('/', passport.checkAuthentication, boardController.createBoard);
router.get('/', passport.checkAuthentication, boardController.getBoards);
router.get('/:id', passport.checkAuthentication, boardController.getById);
module.exports = router;