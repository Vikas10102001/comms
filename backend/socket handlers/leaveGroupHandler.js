const Conversation = require("../model/Conversation");
const Group = require("../model/Group");
const Message = require("../model/Message");
const User = require("../model/User");
const { getActiveConnections } = require("../serverStore");
const { updateChats } = require("./updates/chat");
const { updateGroup } = require("./updates/group");

const leaveGroup = async ({ groupId, userId }) => {
  const group = await Group.findById(groupId);
  const conversation = await Conversation.findById(group.conversation);
  const newParticipants = conversation.participants.filter((participant) => {
    return participant.toString() !== userId;
  });

  conversation.participants = newParticipants;

  await conversation.save();
  const user = await User.findById(userId);
  await Message.create({
    author: userId,
    date: new Date(Date.now()),
    content: `${user.username} left the group`,
    variant: "USER_LEFT",
  });
  let members = [];
  conversation.participants.forEach((participant) => {
    members.push(participant.toString());
  });
  members.push(userId);
  updateGroup(null, null, members, null, null);
  updateChats(conversation._id);
};

module.exports = leaveGroup;
