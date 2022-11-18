const Comment = require('../models/Comment.model');

const CommentController = {
  addNewComment: function (req, res) {
    Comment.create({
      text: req.body.text,
      twitt: req.body.twitt,
      user: req.body.user,
    }).then((comments) => {
      res.json(comments)
    })
  },
  getAllComment: function (req, res) {
    Comment.find({}, (err, comments) => {
      res.json(comments)
    })
      .populate('twitt')
      .populate('user')
  }
};

module.exports = CommentController;