const mongoose = require("mongoose");
const db = require("../models");

// This file empties the CreateCharacter collection and inserts the chracters below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const userSeed = [
  {
    uid: "RWsMGROnxcRo6llE04bbi8fDy1l1",
    characterName: "Brooklynne",
    level: 666,
    health: 100
  }
];

db.CreateCharacter.remove({})
  .then(() => db.CreateCharacter.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
