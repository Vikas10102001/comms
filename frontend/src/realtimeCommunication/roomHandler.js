import store from "../store/store";
import {
  setOpenRoom,
  setRoomDetails,
  setActiveRooms,
  setLocalStream,
  setRemoteStream,
  setScreenSharingStream,
} from "../store/actions/roomAction";
import { createNewRoom, joinRoom, leaveRoom } from "./connectSocketServer";
import { closeAllConnections, getLocalStream } from "./webRTCHandler";

export const openRoomHandler = () => {
  const successCallback = () => {
    store.dispatch(setOpenRoom(true, true));
    createNewRoom();
  };

  getLocalStream(store.getState().room.audioOnly, successCallback);
};

export const newRoomCreated = (data) => {
  const { roomDetails } = data;
  store.dispatch(setRoomDetails(roomDetails));
};
export const setFriendRooms = (data) => {
  const friendRooms = [];
  const { activeRooms } = data;
  const friends = store.getState().friend.friends;
  const userDetail = store.getState().auth.userDetail;

  activeRooms.forEach((room) => {
    if (room.roomCreator.userId === userDetail.id) {
      friendRooms.push({
        ...room,
        roomCreator: { email: userDetail.email, username: userDetail.username },
      });
    }
    friends.forEach((friend) => {
      if (room.roomCreator.userId === friend._id)
        friendRooms.push({
          ...room,
          roomCreator: { email: friend.email, username: friend.username },
        });
    });
  });
  store.dispatch(setActiveRooms(friendRooms));
};

export const joinRoomHandler = (roomId) => {
  const successCallback = () => {
    store.dispatch(setRoomDetails({ roomId }));
    store.dispatch(setOpenRoom(false, true));
    joinRoom({ roomId });
  };
  getLocalStream(store.getState().room.audioOnly, successCallback);
};
export const leaveRoomHandler = () => {
  
  const roomId = store.getState().room.roomDetails.roomId;
  store.dispatch(setOpenRoom(false, false));
  store.dispatch(setRoomDetails(null));
  const screenSharingStream = store.getState().room.screenSharingStream;
  if (screenSharingStream) {
    const stream = screenSharingStream;
    store.dispatch(setScreenSharingStream(null));

    stream.getTracks().forEach((track) => {
      track.stop();
    });
  }
  const localStream = store.getState().room.localStream;
  
  if (localStream) {
    const stream = localStream;
    store.dispatch(setLocalStream(null));
    stream.getTracks().forEach((track) => {
      track.stop();
    });
  }
  store.dispatch(setRemoteStream([]));
  closeAllConnections();
  leaveRoom({ roomId });
};
