const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: String,
  user: String,
  added: Date,
});

// Export model
module.exports = mongoose.model("Message", MessageSchema);