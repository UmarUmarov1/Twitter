const Save = require('../models/Save.model');

const SaveController = {
  addSaveBase: function (req, res) {
    Save.create({
      name: req.body.name,
    }).then((saves) => {
      res.json(saves)
    })
  }
};

module.exports = SaveController;