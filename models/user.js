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
            _id: false,
            id: {
              type: mongoose.Schema.Types.ObjectId,
              ref: 'boards',
            },
            title: {
              type: String,
              required: true,
            }
        }
    ]
}, {
    timestamps: true
});

const user = mongoose.model('User', userSchema);

module.exports = user;