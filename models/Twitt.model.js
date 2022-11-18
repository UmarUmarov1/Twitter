const mongoose = require('mongoose');

const twittSchema = mongoose.Schema({
    name: String,
    comment: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Comment'
    },
    likes: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }],
});

const Twitt = mongoose.model('Twitt', twittSchema);

module.exports = Twitt;