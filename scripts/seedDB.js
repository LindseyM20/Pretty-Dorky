const mongoose = require("mongoose");
const db = require("../models");

// This file empties the CreateUser collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactcms");

const userSeed = [
  {
    username: "Brooklynne",
    password: "S3CR3T"
  },
  {
    username: "Lindsey",
    password: "asdf"
  }
];

db.CreateUser.remove({})
  .then(() => db.CreateUser.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
