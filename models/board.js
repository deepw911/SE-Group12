const mongoose = require('mongoose');

const { Schema } = mongoose;

const boardSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    lists: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'list'
        }
    ],
    backgroundURL: {
        type: String,
    }
}, {
    timestamps: true
});
const board = mongoose.model('board', boardSchema);
module.exports = board;