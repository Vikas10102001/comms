const Message = require("../model/Message");
const Conversation = require("../model/Conversation");
const { directChatHistoryHandler } = require("./directChatHistoryHandler");
const { updateChats } = require("./updates/chat");
const directMessageHandler = async (socket, data) => {
  const userId = socket.user.id;
  const { recieverId, content } = data;

  console.log(userId, recieverId, content);

  const message = await Message.create({
    author: userId,
    type: "DIRECT",
    date: new Date(Date.now()),
    content: content,
  });

  //check if conversation with userId recieverId exists
  const conversation = await Conversation.findOne({
    participants: { $all: [recieverId, userId] },
  });

  if (!conversation) {
    console.log(message._id);
    const newConversation = await Conversation.create({
      participants: [recieverId, userId],
      messages: message._id,
    });
    updateChats(newConversation);
  } else {
    conversation.messages.push(message);
    await conversation.save();
    updateChats(conversation._id);
  }
};

module.exports = directMessageHandler;
