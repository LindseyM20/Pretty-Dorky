const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newUserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },  // Encrypt this later!!
});

const CreateUser = mongoose.model("User", newUserSchema);

module.exports = CreateUser;
