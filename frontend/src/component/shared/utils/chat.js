import store from "../../../store/store";
import { setMessages } from "../../../store/actions/chatAction";

export const updateChatHistory = (data) => {
  const { participants, messages } = data;
  const recieverId = store.getState().chat.chosenChatDetails?.id;
  const senderId = store.getState().auth.userDetail?.id;

  if (recieverId && senderId) {
    const userId = [recieverId, senderId];

    const checkConversation = participants.every((id) => {
      return userId.includes(id);
    });

    if (checkConversation) {
      store.dispatch(setMessages(messages));
    }
  }
};
