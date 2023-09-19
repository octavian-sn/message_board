const mongoose = require("mongoose");

// Create schema
const MessageSchema = new mongoose.Schema({
  text: String,
  user: String,
  added: Date,
});

// Export model
module.exports = mongoose.model("Message", MessageSchema);