const Conversation = require("../model/Conversation");
const Group = require("../model/Group");
const {
  getUserWithActiveConnection,
  getServerInstance,
} = require("../serverStore");

const sendCurrentConversation = async (socket, data) => {
  let currentConversationId;
  const { recieverId, groupId } = data;
  if (recieverId) {
    const senderId = getUserWithActiveConnection(socket.id);
    const participants = [senderId, recieverId];
    const conversation = await Conversation.findOne({
      participants: { $all: participants, $size: 2 }, 
      type: "DIRECT",
    });

    if (conversation) {
      currentConversationId = conversation._id;
    }
  } else {
    const group = await Group.findById(groupId);
    currentConversationId = group.conversation;
  }

  const io = getServerInstance();

  io.to(socket.id).emit("current-conversation", { currentConversationId });
};

module.exports = sendCurrentConversation;
