const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    },
    //creating a friend-list
    friendsList: [{

        friendId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
            },
        friendName: {
            type: String, 
            default: ''
        }
    }]
})

module.exports = User = mongoose.model('user', UserSchema)