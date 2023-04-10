import { openAlert } from "../store/actions/alertAction";
import {
  setChosenChatDetails,
  setCurrentConversation,
} from "../store/actions/chatAction";
import { setGroups } from "../store/actions/groupAction";
import store from "../store/store";

export const groupUpdate = (data) => {
  console.log(data);
  let severity = null;
  let content = "";
  if (data.newGroup) {
    if (store.getState().auth.userDetail.id === data.newGroup.admin) {
      severity = "success";
      content = `'${data.newGroup.name}' group successfully created`;
    } else {
      content = `You were added to '${data.newGroup.name}' group `;
    }
    store.dispatch(openAlert(content, severity));
  } else if (data.deletedGroup) {
    store.dispatch(setChosenChatDetails(null));
    store.dispatch(setCurrentConversation(null));
  }
  store.dispatch(setGroups(data.groupUpdate));
};
