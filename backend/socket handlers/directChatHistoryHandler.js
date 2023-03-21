const Conversation = require("../model/Conversation");
const { updateChats } = require("./updates/chat");

const directChatHistoryHandler = async (socket, data) => {
  const { recieverId } = data;
  const userId = socket.user.id;

  const conversation = await Conversation.findOne({
    participants: { $all: [userId, recieverId] },
    type: "DIRECT",
  });

  if (conversation) {
    updateChats(conversation._id, socket.id);
  }
};

module.exports = { directChatHistoryHandler };
