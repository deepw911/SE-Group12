const mongoose = require('mongoose');
const { Schema } = mongoose;
const listSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  cards: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Card',
    },
  ],
});

const List = mongoose.model('List', listSchema);
module.exports = List;