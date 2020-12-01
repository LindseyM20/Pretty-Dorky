const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newCharacterSchema = new Schema({
  uid: {type: String, required: true },
  characterName: { type: String, required: true },
  level: { type: Number, required: true },
  health: {type: Number, required: true}
});

const CreateCharacter = mongoose.model("Character", newCharacterSchema);

module.exports = CreateCharacter;
