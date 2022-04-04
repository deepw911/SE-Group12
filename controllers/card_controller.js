const List = require('../models/list');
const Board = require('../models/board');
const Card = require('../models/card');
module.exports.createCard = async (req, res) => {
    try {
      const { title, listId } = req.body;

      // Create and save the card
      const newCard = new Card({ title });
      const card = await newCard.save();

      // Assign the card to the list
      const list = await List.findById(listId);
      list.cards.push(card.id);
      await list.save();

      res.json(card);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }

  module.exports.editCard = async (req, res) => {
    try {
      const { title, description } = req.body;
      if (title === '') {
        return res.status(400).json({ msg: 'Title is required' });
      }
  
      const card = await Card.findById(req.params.id);
      if (!card) {
        return res.status(404).json({ msg: 'Card not found' });
      }
  
      card.title = title ? title : card.title;
      card.description = description ? description : card.description;
      card.save();
  
      res.json(card);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
}

module.exports.moveCard = async (req, res) => {
    try {
      const cardId = req.body.cardId;
      const from = await List.findById(req.body.from);
      const to = await List.findById(req.body.to);
      if (!cardId || !from || !to) {
        return res.status(404).json({ msg: 'List/card not found' });
      }
  
      from.cards.splice(from.cards.indexOf(cardId), 1);
      await from.save();
  
      if (!to.cards.includes(cardId)) {
        to.cards.push(cardId);
        await to.save();
      }
  
      res.send({ from, to });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
}

module.exports.deleteCard = async (req, res) => {
    try {
      const card = await Card.findById(req.params.id);
      const list = await List.findById(req.body.listId);
      if (!card || !list) {
        return res.status(404).json({ msg: 'List/card not found' });
      }
  
      list.cards.splice(list.cards.indexOf(req.params.id), 1);
      await list.save();
      await card.remove();
  
      res.json({ msg: 'Card removed' });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
}

module.exports.getCardsOfList = async (req, res) => {
    try {
      const list = await List.findById(req.params.listId);
      if (!list) {
        return res.status(404).json({ msg: 'List not found' });
      }
  
      res.json(list.cards);
    } catch (error) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
}

module.exports.getById = async (req, res) => {
    try {
      const card = await Card.findById(req.params.id);
      if (!card) {
        return res.status(404).json({ msg: 'Card not found' });
      }
  
      res.json(card);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
}