const Group = require("../../model/Group");
const { getServerInstance } = require("../../serverStore");
const { getActiveConnections } = require("../../serverStore");

const updateGroup = async (
  userId,
  toSpecificSocket,
  toGroupMembers,
  newGroup,
  deletedGroup
) => {
  const io = getServerInstance();
  console.log("deleted group", deletedGroup);
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
    io.to(toSpecificSocket).emit("group-update", {
      groupUpdate,
      newGroup,
      deletedGroup,
    });
  }

  if (toGroupMembers) {
    console.log(toGroupMembers);
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
          if (participant._id.toString() === member) groupUpdate.push(group);
        });
      });

      const activeConnections = getActiveConnections(member.toString());
      activeConnections.forEach((socketId) => {
        io.to(socketId).emit("group-update", {
          groupUpdate,
          newGroup,
          deletedGroup,
        });
      });
    });
  }
};

module.exports = {
  updateGroup,
};
