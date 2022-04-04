const Board = require('../models/board');
const User = require('../models/user');
const router = require('../routes');

//create a board
module.exports.createBoard = async (req, res) => {

    try {
      const { title, backgroundURL } = req.body;

      // Create and save the board
      const newBoard = new Board({ title, backgroundURL });
      const board = await newBoard.save();

      // Assign the board to the user
      const user = await User.findById(req.user.id).select('-password');
      user.boards.push(board.id);
      await user.save();

      res.json(board);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }

  //get all boards
module.exports.getBoards = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');

        res.json(user.ownedBoards);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

// Get a board by id
module.exports.getById = async (req, res) => {
    try {
      const board = await Board.findById(req.params.id);
  
      if (!board) {
        return res.status(404).json({ msg: 'Board not found' });
      }
  
      res.json(board);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
}

//edit board title
module.exports.editTitle = async (req, res) => {

  try {
    const board = await Board.findById(req.params.id);

    if (!board) {
      return res.status(404).json({ msg: 'Board not found' });
    }

    board.title = req.body.title;
    board.save();

    res.json(board);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}

