const List = require('../models/list');
const Board = require('../models/board');
module.exports.createList = async (req, res) => {
    try {
      const { name, boardId } = req.body;

      // Create and save the list
      const newList = new List({ name });
      const list = await newList.save();

      // Assign the list to the board
      const board = await Board.findById(boardId);
      board.lists.push(list.id);
      await board.save();

      res.json(list);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }