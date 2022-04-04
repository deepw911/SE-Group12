const express = require('express');
const router = express.Router();
const cardController = require('../controllers/card_controller');
const passport = require('../config/passport-local-strategy');

router.post('/',passport.checkAuthentication, cardController.createCard );

router.patch('/:id', passport.checkAuthentication, cardController.editCard);

router.patch('/moveCard/:cardId/:from/:to', passport.checkAuthentication, cardController.moveCard);

module.exports = router;