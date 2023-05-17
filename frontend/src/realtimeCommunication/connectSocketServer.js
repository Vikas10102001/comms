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
import {
  setChosenChatDetails,
  setCurrentConversation,
} from "../store/actions/chatAction";
import { openAlert } from "../store/actions/alertAction";
import { groupUpdate } from "./groupHandler";
import { setIsLoading } from "../store/actions/spinnerAction";

let socket = null;
export const connectWithSocketServer = (userDetail) => {
  const jwtToken = userDetail.token;
  socket = io("http://localhost:8080", {
    auth: {
      token: jwtToken,
    },
  });
  socket.on("connect", () => {
    console.log("connected to socket server");
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
  socket.on("current-conversation", (data) => {
    const { currentConversationId } = data;
    store.dispatch(setCurrentConversation(currentConversationId));
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
  socket.on("group-update", (data) => {
    groupUpdate(data);
  });
  socket.on("user-removed", (data) => {
    if (data.group.conversation === store.getState().chat.conversationId) {
      store.dispatch(setChosenChatDetails(null, null));
    }
    store.dispatch(
      openAlert(`You were removed from '${data.group.name}' group`)
    );
  });
  socket.on("room-participant-left", (data) => {
    closeConnection(data);
  });
};

export const handleDirectMessage = (data) => {
  socket.emit("direct-message", data);
};
export const handleGroupMessage = (data) => {
  socket.emit("group-message", data);
};
export const getDirectChatHistory = (data) => {
  socket.emit("direct-chat-history", data);
};

export const getGroupChatHistory = (data) => {
  socket.emit("group-chat-history", data);
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

export const createGroup = (data) => {
  socket.emit("create-group", data);
};

export const deleteGroup = (data) => {
  socket.emit("delete-group", data);
};
export const leaveGroup = (data) => {
  socket.emit("leave-group", data);
};
export const kickUser = (data) => {
  socket.emit("kick-user", data);
};
