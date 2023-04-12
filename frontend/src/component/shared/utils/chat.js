import store from "../../../store/store";
import { setMessages } from "../../../store/actions/chatAction";

export const updateChatHistory = (data) => {
  const { conversationId, messages } = data;
  
  const currentConversationId = store.getState().chat.conversationId;
  const checkConversation = conversationId === currentConversationId ;
  if (checkConversation) {
    store.dispatch(setMessages(messages));
  }
};
