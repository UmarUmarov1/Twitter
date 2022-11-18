const Twitt = require('../models/Twitt.model');

const TwittController = {
  addNewTwitt: function (req, res) {
    Twitt.create({
      name: req.body.name,
      comment: req.body.comment,
      likes: req.body.likes,
      save: req.body.save,
    }).then((twitts) => {
      res.json(twitts)
    })
  },
  changeTwitts: function (req, res) {
    Twitt.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { likes: req.body.likes } },
      { new: true }
    ).then((twitts) => {
      res.json(twitts)
    })
  },
  getAllTwitts: function (req, res) {
    Twitt.find({}, (err, twitts) => {
      res.json(twitts)
    })
  }
};

module.exports = TwittController;