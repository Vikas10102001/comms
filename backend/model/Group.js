const Mongoose = require("mongoose");

const groupSchema = Mongoose.Schema({
  conversation: {
    type: Mongoose.Schema.ObjectId,
    ref: "Conversation",
  },
  name: {
    type: String,
    required: [true, "Group must have a name"],
  },
  admin: {
    type: Mongoose.Schema.ObjectId,
    ref: "User",
  },
  date: Date,
});

const Group = Mongoose.model("Group", groupSchema);

module.exports = Group;
