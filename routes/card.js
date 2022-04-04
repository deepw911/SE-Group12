const express = require('express');
const router = express.Router();
const cardController = require('../controllers/card_controller');
const passport = require('../config/passport-local-strategy');

router.post('/',passport.checkAuthentication, cardController.createCard );

router.patch('/:id', passport.checkAuthentication, cardController.editCard);

router.patch('/moveCard/:cardId/:from/:to', passport.checkAuthentication, cardController.moveCard);

router.delete('/:id', passport.checkAuthentication, cardController.deleteCard);

router.get('/listCards/:listId', passport.checkAuthentication, cardController.getCardsOfList);

router.get('/:id', passport.checkAuthentication, cardController.getById);
  
  

module.exports = router;