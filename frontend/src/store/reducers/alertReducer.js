import alertActions from "../actions/alertAction";

const initState = {
  showAlertMessage: false,
  alertMessageContent: null,
  severity: null,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case alertActions.OPEN_ALERT:
      return {
        ...state,
        showAlertMessage: true,
        alertMessageContent: action.content,
        severity: action.severity,
      };

    case alertActions.CLOSE_ALERT:
      return {
        ...state,
        showAlertMessage: false,
        alertMessageContent: null,
      };
    default:
      return state;
  }
};

export default reducer;
