const roomActions = {
  OPEN_ROOM: "ROOM.OPEN_ROOM",
  SET_ROOM_DETAILS: "ROOM.SET_ROOM_DETAILS",
  SET_ACTIVE_ROOMS: "ROOM.SET_ACTIVE_ROOMS",
  SET_LOCAL_STREAM: "ROOM.SET_LOCAL_STREAM",
  SET_AUDIO_ONLY: "ROOM.SET_AUDIO_ONLY",
  SET_REMOTE_STREAM: "ROOM.SET_REMOTE_STREAM",
  SET_SCREEN_SHARING_STREAM: "ROOM.SET_SCREEN_SHARING_STREAM",
};

export const getActions = (dispatch) => {
  return {
    setAudioOnly: (audioOnly) => {
      dispatch(setAudioOnly(audioOnly));
    },
    setScreenSharingStream: (stream) => {
      dispatch(setScreenSharingStream(stream));
    },
  };
};

const setAudioOnly = (audioOnly) => {
  return {
    type: roomActions.SET_AUDIO_ONLY,
    audioOnly,
  };
};
export const setOpenRoom = (isUserCreator = false, hasUserJoined = false) => {
  return {
    type: roomActions.OPEN_ROOM,
    isUserCreator,
    hasUserJoined,
  };
};

export const setRoomDetails = (roomDetails) => {
  return {
    type: roomActions.SET_ROOM_DETAILS,
    roomDetails,
  };
};

export const setActiveRooms = (activeRooms) => {
  return {
    type: roomActions.SET_ACTIVE_ROOMS,
    activeRooms,
  };
};

export const setLocalStream = (stream) => {
  return {
    type: roomActions.SET_LOCAL_STREAM,
    stream,
  };
};
export const setRemoteStream = (remoteStream) => {
  return {
    type: roomActions.SET_REMOTE_STREAM,
    remoteStream,
  };
};
export const setScreenSharingStream = (stream) => {
  return {
    type: roomActions.SET_SCREEN_SHARING_STREAM,
    isScreenSharing: stream ? true : false,
    screenSharingStream: stream,
  };
};
export default roomActions;
