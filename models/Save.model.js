const mongoose = require('mongoose');

const saveSchema = mongoose.Schema({
    name: String,
    twitt: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Twitt'
    }
});

const Save = mongoose.model('Save', saveSchema);

module.exports = Save;