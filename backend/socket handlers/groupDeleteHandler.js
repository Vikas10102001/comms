const Group = require("../model/Group");
const { getUserWithActiveConnection } = require("../serverStore");
const { updateGroup } = require("./updates/group");

const deleteGroupHandler = async (socket, { groupId }) => {
  const userId = getUserWithActiveConnection(socket.id);
  const group = await Group.findById(groupId).populate("conversation");
  let members = [];
  group.conversation.participants.forEach((participant) => {
    members.push(participant.toString());
  });
  if (group.admin.toString() === userId) {
    await Group.findByIdAndDelete(groupId);
    updateGroup(socket.user.id, null, members, null, group);
  }
};

module.exports = deleteGroupHandler;
