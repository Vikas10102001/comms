import { chatActions } from "../actions/chatAction";

const initState = {
  chosenChatDetails: null,
  messages: [],
  conversationId: null,
  chatType: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case chatActions.SET_CHOSEN_CHAT_DETAIL:
      return {
        ...state,
        chosenChatDetails: action.chosenChatDetails,
        messages: [],
        chatType: action.chatType,
      };

    case chatActions.SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    case chatActions.SET_CURRENT_CONVERSATION:
      return {
        ...state,
        conversationId: action.conversationId,
      };
    default:
      return state;
  }
};

export default reducer;
