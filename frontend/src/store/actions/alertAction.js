const alertActions = {
  OPEN_ALERT: "ALERT.OPEN_ALERT",
  CLOSE_ALERT: "ALERT.CLOSE_ALERT",
};

export const getActions = (dispatch) => {
  return {
    openAlert: (content) => {
      dispatch(openAlert(content));
    },
    closeAlert: () => {
      dispatch(closeAlert());
    },
  };
};

export const openAlert = (content,severity) => {
  return {
    type: alertActions.OPEN_ALERT,
    content,
    severity
  };
};

export const closeAlert = () => {
  return {
    type: alertActions.CLOSE_ALERT,
  };
};


export default alertActions