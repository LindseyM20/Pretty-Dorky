const db = require("../models");

// Defining methods for the createCharacter Controller
module.exports = {
  // findAll: function(req, res) {
  //   db.CreateCharacter.find(req.query)
  //   //   .sort({ date: -1 })
  //   //   .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.CreateCharacter.findById(req.params.id)
  //   //   .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  create: function (req, res) {
    /*db.Character.find({ uid: req.body.uid })
      .then(dbModel => {
          console.log(dbModel);
        if (dbModel) dbModel.remove()})
      .then(() => {*/
        console.log("here")
        db.Character.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
     // )

 // },
  // update: function(req, res) {
  //   db.CreateCharacter.findOneAndUpdate({ _id: req.params.id }, req.body)
  //   //   .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.CreateCharacter.findById({ _id: req.params.id })
  //   //   .then(dbModel => dbModel.remove())
  //   //   .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
