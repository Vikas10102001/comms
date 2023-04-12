import { openAlert } from "../store/actions/alertAction";
import {
  chatActions,
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
    if (store.getState().auth.userDetail.id === newGroupPopulated.admin._id) {
      severity = "success";
      content = `'${newGroupPopulated.name}' group successfully created`;
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
    } else {
      content = `You were added to '${newGroupPopulated.name}' group `;
    }
    store.dispatch(openAlert(content, severity));
  } else if (deletedGroup) {
    if (store.getState().auth.userDetail.id === deletedGroup.admin) {
      severity = "success";
      content = `'${deletedGroup.name}' group successfully deleted`;
    } else {
      content = `'${deletedGroup.name}' group deleted`;
    }
    store.dispatch(openAlert(content, severity));
    store.dispatch(setChosenChatDetails(chosenChatDetails));
    store.dispatch(setCurrentConversation(currentConversationId));
  } else {
  }

  store.dispatch(setGroups(groupUpdate));
  //If current group is open then the left user should be removed from group member list which is present in chosenChatDetails.members. we need to update that
  const currentGroup = groupUpdate.find((group) => {
    if (store.getState().chat.conversationId === group.conversation._id)
      return group;
  });
  if (currentGroup) {
    const chosenChatDetails = store.getState().chat.chosenChatDetails;
    console.log(chosenChatDetails);
    store.dispatch(
      setChosenChatDetails(
        {
          ...chosenChatDetails,
          members: currentGroup.conversation.participants,
        },
        chatActions.GROUP
      )
    );
  }
  console.log(currentGroup);
};
