import io from "socket.io-client";
import {
  setFriends,
  setOnlineFriends,
  setPendingFriendsInvitation,
} from "../store/actions/friendsAction";
import store from "../store/store";
import { updateChatHistory } from "../component/shared/utils/chat";
import { newRoomCreated } from "./roomHandler";
import { setFriendRooms } from "./roomHandler";
import {
  closeConnection,
  handleSignalingData,
  prepareNewPeerConnection,
} from "./webRTCHandler";

let socket = null;
export const connectWithSocketServer = (userDetail) => {
  const jwtToken = userDetail.token;
  socket = io("http://localhost:8080", {
    auth: {
      token: jwtToken,
    },
  });
  socket.on("connect", () => {
    // console.log(socket.id)
  });
  socket.on("friends-invitations", (data) => {
    const { pendingFriendsInvitations } = data;
    store.dispatch(setPendingFriendsInvitation(pendingFriendsInvitations));
  });

  socket.on("friends", (data) => {
    const { friends } = data;
    store.dispatch(setFriends(friends));
  });
  socket.on("online-users", (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineFriends(onlineUsers));
  });

  socket.on("direct-chat-history", (data) => {
    updateChatHistory(data);
  });
  socket.on("room-create", (data) => {
    newRoomCreated(data);
  });

  socket.on("active-rooms", (data) => {
    setFriendRooms(data);
  });
  socket.on("con-prepare", (data) => {
    const { conUserSocketId } = data;
    prepareNewPeerConnection(conUserSocketId, false);
    socket.emit("con-init", { conUserSocketId: conUserSocketId });
  });

  socket.on("con-init", (data) => {
    const { conUserSocketId } = data;
    prepareNewPeerConnection(conUserSocketId, true);
  });
  socket.on("con-signal", (data) => {
    handleSignalingData(data);
  });
  socket.on("room-participant-left", (data) => {
    closeConnection(data);
  });
};

export const handleDirectMessage = (data) => {
  socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
};

export const createNewRoom = () => {
  socket.emit("create-room");
};

export const joinRoom = (data) => {
  socket.emit("join-room", data);
};

export const leaveRoom = (data) => {
  socket.emit("leave-room", data);
};

export const signalPeerData = (data) => {
  socket.emit("con-signal", data);
};
