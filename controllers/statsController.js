const db = require("../models");

// Defining methods for the createCharacter Controller
module.exports = {
  // findAll: function(req, res) {
  //   db.CreateCharacter.find(req.query)
  //   //   .sort({ date: -1 })
  //   //   .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  findById: function(req, res) {
    console.log("getting character here")
    db.Character.findOne({uid:req.params.uid})
      .then(dbModel => {
        console.log(dbModel);
        console.log(req.params.uid);
        return res.json(dbModel)
      }
        )
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    /*db.Character.find({ uid: req.body.uid })
      .then(dbModel => {
          console.log(dbModel);
        if (dbModel) dbModel.remove()})
      .then(() => {*/
        console.log("create here")
        db.Character.create(req.body)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
    // Brooklynne:
    // ** tested in postman
  update: function(req, res) {
    console.log("updating here")
    db.Character.findOneAndUpdate({uid:req.params.uid}, req.body, {"new": true})
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.CreateCharacter.findById({ uid:req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
