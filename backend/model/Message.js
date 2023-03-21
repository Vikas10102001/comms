const Mongoose = require("mongoose");

const messageSchema = Mongoose.Schema({
  author: {
    type: Mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "A message must have an author"],
  },
  type: {
    type: String,
    enum: ["DIRECT", "GROUP"],
    required: [true, "Please provide message type"],
  },
  date: {
    type: Date,
    required: [true, "Please provide date for message"],
  },
  content: {
    type: String,
    required: [true, "A message must have a content"],
  },
});

const Message = Mongoose.model("Message", messageSchema);

module.exports = Message;
