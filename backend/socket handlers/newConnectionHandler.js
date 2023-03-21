const { addNewConnectedUser } = require("../serverStore");
const { updateFriendsPendingInvitation, updateFriendsList } = require("./updates/friends");
const { updateRooms } = require("./updates/room");

const newConnectionHandler = (socket, io) => {
  addNewConnectedUser({ socketId: socket.id, userId: socket.user.id });
  updateFriendsPendingInvitation(socket.user.id.toString())
  updateFriendsList(socket.user.id.toString())
  setTimeout(()=>{
    updateRooms(socket.id)
  },500)
};


module.exports = {
  newConnectionHandler,
};
