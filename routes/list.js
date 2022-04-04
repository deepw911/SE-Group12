const express = require('express');
const router = express.Router();
const listController = require('../controllers/list_controller');
const passport = require('../config/passport-local-strategy');

// Create a list
router.post('/',passport.checkAuthentication, listController.createList);

router.patch('/rename/:id', passport.checkAuthentication, listController.renameList);

router.get('/:boardId', passport.checkAuthentication, listController.getBoardLists);

module.exports = router;