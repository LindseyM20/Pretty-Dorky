const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newCharacterSchema = new Schema({
  uid: {type: String, required: true },
  charInfo: {
    name: { type: String, required: true },
    level: { type: Number, required: true },
    strength: { type: Number, required: true },
    currentHealth: {type: Number, required: true},
    maxHealth: {type: Number, required: true}
  }

});

const CreateCharacter = mongoose.model("character", newCharacterSchema);

module.exports = CreateCharacter;
