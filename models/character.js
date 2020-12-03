const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  uid: {type: String, required: true },
  name: { type: String, required: true },
  level: { type: Number, required: true },
  strength: { type: Number, required: true },
  currentHealth: {type: Number, required: true},
  maxHealth: {type: Number, required: true},
  spriteImage: {type: String, required: true}


});

const Character = mongoose.model("character", characterSchema);

module.exports = Character;
