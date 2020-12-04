const mongoose = require("mongoose");
const db = require("../models");

// This file empties the CreateCharacter collection and inserts the chracters below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/character");

const userSeed = [
  {
    uid: "RWsMGROnxcRo6llE04bbi8fDy1l1",
    name: "TestCharacter1",
    level: 13,
    strength: 30,
    maxHealth: 100,
    currentHealth: 100,
    spriteImage: ""
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
