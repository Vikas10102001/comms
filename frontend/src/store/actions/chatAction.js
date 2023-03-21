export const chatTypes = {
  DIRECT: "DIRECT",
  GROUP: "GROUP",
};

export const chatActions = {
  SET_CHOSEN_CHAT_DETAIL: "CHAT.SET_CHOSEN_CHAT_DETAILS",
  SET_MESSAGES: "CHAT.SET_MESSAGES",
  SET_CHAT_TYPE: "CHAT.SET_CHAT_TYPE",
};

export const getActions = (dispatch) => {
  return {
    setChosenChatDetails: (chosenChatDetails, chatType) => {
      dispatch(setChosenChatDetails(chosenChatDetails, chatType));
    },
    setMessages: (messages) => {
      dispatch(setMessages(messages));
    },
  };
};

export const setMessages = (messages) => {
  return {
    type: chatActions.SET_MESSAGES,
    messages,
  };
};
const setChosenChatDetails = (chosenChatDetails, chatType) => {
  return {
    type: chatActions.SET_CHOSEN_CHAT_DETAIL,
    chosenChatDetails,
    chatType,
  };
};
