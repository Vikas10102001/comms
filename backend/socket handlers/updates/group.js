const Group = require("../../model/Group");
const { getServerInstance } = require("../../serverStore");
const { getActiveConnections } = require("../../serverStore");

const updateGroup = async (
  userId,
  toSpecificSocket,
  toGroupMembers,
  newGroup
) => {
  const io = getServerInstance();

  if (toSpecificSocket) {
    const groupUpdate = await Group.find({ members: { $in: [userId] } })
      .populate({
        path: "admin",
        select: "username email",
      })
      .populate({
        path: "conversation",
        populate: {
          path: "participants",
          select: "username email",
        },
      });
    io.to(toSpecificSocket).emit("group-update", { groupUpdate, newGroup });
  }

  if (toGroupMembers) {
    const groups = await Group.find()
      .populate({ path: "admin", select: "username email" })
      .populate({
        path: "conversation",
        populate: {
          path: "participants",
          select: "username email",
        },
      });
    toGroupMembers.forEach((member) => {
      let groupUpdate = [];
      groups.forEach((group) => {
        group.conversation.participants.forEach((participant) => {
          console.log(participant._id, member);
          if (participant._id.toString() === member) groupUpdate.push(group);
        });
      });

      const activeConnections = getActiveConnections(member.toString());
      activeConnections.forEach((socketId) => {
        io.to(socketId).emit("group-update", {
          groupUpdate,
          newGroup,
        });
      });
    });
  }
};

module.exports = {
  updateGroup,
};
