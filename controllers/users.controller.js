// const { populate } = require('../models/User.model');
const User = require('../models/User.model');
// const { use } = require('../routes/twitts.route');

const UserController = {
  addNewUser: function (req, res) {
    User.create({
      name: req.body.name,
      twitt: req.body.twitt,
    }).then((users) => {
      res.json(users)
    })
  },
  changeUser: function (req, res) {
    User.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { save: req.body.save } },
      { new: true }
    ).then((users) => {
      res.json(users)
    })
  },
  getAllUsers: function (req, res) {
    User.find({}, (err, users) => {
      res.json(users)
    }).populate('save')
  },
  getOneUser: function (req, res) {
    User.findById(req.params.id, (err, users) => {
      res.json(users)
    })
      .populate('save')
      .populate('twitt')
      .populate({
        path: 'twitt',
        populate: {
          path: 'likes',
          model: 'User',
        },
      })
      .populate({
        path: 'twitt',
        populate: {
          path: 'comment',
          model: 'Comment',
        },
      })
  }
};

module.exports = UserController;