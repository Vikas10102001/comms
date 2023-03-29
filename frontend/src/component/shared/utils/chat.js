import store from "../../../store/store";
import { setMessages } from "../../../store/actions/chatAction";

export const updateChatHistory = (data) => {
  const { conversationId, messages } = data;
  
  const currentConversationId = store.getState().chat.conversationId;
  console.log(currentConversationId)
  const checkConversation = conversationId === currentConversationId ;
  console.log(conversationId,currentConversationId );
  if (checkConversation) {
    store.dispatch(setMessages(messages));
  }
};
