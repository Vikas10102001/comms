import roomAction from "../actions/roomAction";
const initState = {
  isUserCreator: false,
  hasUserJoined: false,
  roomDetails: null,
  activeRooms: [],
  localStream: null,
  isLocalStream: true,
  audioOnly: false,
  remoteStream: [],
  isScreenSharing:false,
  screenSharingStream:null
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case roomAction.OPEN_ROOM:
      return {
        ...state,
        isUserCreator: action.isUserCreator,
        hasUserJoined: action.hasUserJoined,
      };
    case roomAction.SET_ROOM_DETAILS:
      return {
        ...state,
        roomDetails: action.roomDetails,
      };
    case roomAction.SET_ACTIVE_ROOMS:
      return {
        ...state,
        activeRooms: action.activeRooms,
      };
    case roomAction.SET_LOCAL_STREAM:
      return {
        ...state,
        localStream: action.stream,
      };
    case roomAction.SET_AUDIO_ONLY:
      return {
        ...state,
        audioOnly: action.audioOnly,
      };
    case roomAction.SET_REMOTE_STREAM:
      return {
        ...state,
        remoteStream: action.remoteStream,
      };
    case roomAction.SET_SCREEN_SHARING_STREAM:
      return {
        ...state,
        isScreenSharing: action.isScreenSharing,
        screenSharingStream: action.screenSharingStream,
      };
    default:
      return state;
  }
};

export default reducer;
