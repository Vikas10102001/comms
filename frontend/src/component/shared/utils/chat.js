import store from "../../../store/store";
import { setMessages } from "../../../store/actions/chatAction";
import { getCurrentConversation } from "../../../realtimeCommunication/connectSocketServer";

export const updateChatHistory = (data) => {
  const { participants, messages, type, conversationId } = data;
  const chatType = store.getState().chat.chatType;
  console.log(participants);
  // if (store.getState().chat.chatType === "DIRECT") {
  //   const id = store.getState().chat.chosenChatDetails.id;
  //   getCurrentConversation({ recieverId: id });
  // }
  let chosenCoversationPartipants = [];
  let checkConversation;
  if (chatType === type) {
    if (chatType === "DIRECT") {
      const userId = store.getState().auth.userDetail.id;
      const recieverId = store.getState().chat.chosenChatDetails.id;
      chosenCoversationPartipants = [userId, recieverId];
      checkConversation =
        participants.length === chosenCoversationPartipants.length
          ? participants.every((element) => {
              if (chosenCoversationPartipants.includes(element)) {
                return true;
              }
              return false;
            })
          : false;
    }
    if (chatType === "GROUP") {
      checkConversation =
        store.getState().chat.conversationId === conversationId;
    }
    if (checkConversation) {
      store.dispatch(setMessages(messages));
    }
  }
};
