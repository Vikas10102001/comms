const initState = {
  chosenChatDetails: null,
  messages: [],
  chatType: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "CHAT.SET_CHOSEN_CHAT_DETAILS":
      return {
        ...state,
        chosenChatDetails: action.chosenChatDetails,
        messages: [],
        chatType: action.chatType,
      };

    case "CHAT.SET_MESSAGES":
      return {
        ...state,
        messages: action.messages,
      };
    default:
      return state;
  }
};

export default reducer;
