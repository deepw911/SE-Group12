const mongoose = require('mongoose');

const { Schema } = mongoose;

var userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    boards: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'board'
        }
    ]
}, {
    timestamps: true
});

const user = mongoose.model('User', userSchema);

module.exports = user;