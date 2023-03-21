const Mongoose = require("mongoose");

const conversationSchema = Mongoose.Schema({
  participants: [
    {
      type: Mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "conversation must have participants"],
    },
  ],
  messages: [
    {
      type: Mongoose.Schema.ObjectId,
      ref: "Message",
    },
  ],
});

const Conversation = Mongoose.model("Conversation", conversationSchema);

module.exports = Conversation;
