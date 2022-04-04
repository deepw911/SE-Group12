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
            ref: 'List'
        }
    ],
    backgroundURL: {
        type: String,
    }
}, {
    timestamps: true
});
const board = mongoose.model('Board', boardSchema);
module.exports = board;