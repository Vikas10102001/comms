const Mongoose = require("mongoose");

const messageSchema = Mongoose.Schema({
  author: {
    type: Mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "A message must have an author"],
  },
  
  date: Date,
  content: {
    type: String,
    required: [true, "A message must have a content"],
  },
});

const Message = Mongoose.model("Message", messageSchema);

module.exports = Message;
