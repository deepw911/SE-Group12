const Board = require('../models/board');
const User = require('../models/user');
const router = require('../routes');

module.exports.createBoard = async (req, res) => {

    try {
      const { title, backgroundURL } = req.body;

      // Create and save the board
      const newBoard = new Board({ title, backgroundURL });
      const board = await newBoard.save();

      // Assign the board to the user
      const user = await User.findById(req.user.id).select('-password');
      user.boards.push({id: board.id, title: board.title});
      await user.save();

      res.json(board);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }

module.exports.getBoards = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        res.json(user.ownedBoards);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}