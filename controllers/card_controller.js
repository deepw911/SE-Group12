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