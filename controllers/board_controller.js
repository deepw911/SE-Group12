const Board = require('../models/board');
const User = require('../models/user');

module.exports.createBoard = async (req, res) => {

    try {
      const { title, backgroundURL } = req.body;

      // Create and save the board
      const newBoard = new Board({ title, backgroundURL });
      const board = await newBoard.save();

      // Assign the board to the user
      const user = await User.findById(req.user.id).select('-password');
      user.ownedBoards.push(board.id);
      await user.save();

      res.json(board);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }