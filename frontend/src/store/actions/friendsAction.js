import { openAlert } from "./alertAction";
import * as api from "../../api";
const friendsAction = {
  SET_FRIENDS: "FRIEND.SET_FRIENDS",
  SET_PENDING_FRIENDS_INVITATIONS: "FRIEND.SET_PENDING_FRIENDS_INVITATIONS",
  SET_ONLINE_FRIENDS: "FRIEND. SET_ONLINE_FRIENDS",
  
};

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) => {
      dispatch(sendFriendInvitation(data, closeDialogHandler));
    },
    acceptFriendInvitation: (data) => {
      dispatch(acceptFriendInvitation(data));
    },
    rejectFriendInvitation: (data) => {
      dispatch(rejectFriendInvitation(data));
    },
  };
};
export const setPendingFriendsInvitation = (pendingFriendsInvitation) => {
  return {
    type: friendsAction.SET_PENDING_FRIENDS_INVITATIONS,
    pendingFriendsInvitation,
  };
};

export const setFriends = (friends) => {
  return {
    type: friendsAction.SET_FRIENDS,
    friends,
  };
};

export const setOnlineFriends=(onlineUsers)=>{
  return {
    type:friendsAction.SET_ONLINE_FRIENDS,
    onlineUsers
  }
} 
const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendInvitation(data);
    if (response.error) {
      dispatch(openAlert(response.er.response.data.error));
    } else {
      console.log(response);
      dispatch(openAlert("Invitation has been sent"));
      closeDialogHandler();
    }
  };
};

const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.acceptInvitation(data);
    if (response.error) {
      dispatch(openAlert(response.er.response.data.error));
    } else {
      console.log(response);
      dispatch(openAlert("Invitation has been accepted successfully"));
    }
  };
};
const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.rejectInvitation(data);
    if (response.error) {
      dispatch(openAlert(response.er.response.data.error));
    } else {
      console.log(response);
      dispatch(openAlert("Invitation has been rejected successfully"));
    }
  };
};

export default friendsAction;
