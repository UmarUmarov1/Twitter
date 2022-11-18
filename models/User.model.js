const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  twitt: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Twitt'
  },
  save: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Twitt'
  }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;