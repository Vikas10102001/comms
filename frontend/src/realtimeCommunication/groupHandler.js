import { openAlert } from "../store/actions/alertAction";
import {
  chatTypes,
  setChosenChatDetails,
  setCurrentConversation,
} from "../store/actions/chatAction";
import { setGroups } from "../store/actions/groupAction";
import store from "../store/store";

export const groupUpdate = (data) => {
  const { newGroup, deletedGroup, groupUpdate } = data;
  let severity = null;
  let content = "";
  let chosenChatDetails = null;
  let currentConversationId = null;

  if (newGroup) {
    const newGroupPopulated = groupUpdate.find((group) => {
      return newGroup._id === group._id;
    });
    if (store.getState().auth.userDetail.id === newGroupPopulated.admin) {
      severity = "success";
      content = `'${newGroupPopulated.name}' group successfully created`;
    } else {
      content = `You were added to '${newGroupPopulated.name}' group `;
    }
    store.dispatch(openAlert(content, severity));
    chosenChatDetails = {
      groupId: newGroupPopulated._id,
      username: newGroupPopulated.name,
      admin: newGroupPopulated.admin,
      date: newGroupPopulated.date,
      members: newGroupPopulated.conversation.participants,
    };
    currentConversationId = newGroupPopulated.conversation._id;
    store.dispatch(setChosenChatDetails(chosenChatDetails, chatTypes.GROUP));
    store.dispatch(setCurrentConversation(currentConversationId));
  } else if (deletedGroup) {
    if (store.getState().auth.userDetail.id === deletedGroup.admin) {
      content = `'${deletedGroup.name}' group successfully deleted`;
    } else {
      content = `'${deletedGroup.name}' group deleted`;
    }
    store.dispatch(openAlert(content, severity));
    store.dispatch(setChosenChatDetails(chosenChatDetails));
    store.dispatch(setCurrentConversation(currentConversationId));
  }

  store.dispatch(setGroups(groupUpdate));
};
