import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/alertAction";

function AlertNotification({showAlertMessage,closeAlert,alertMessageContent}) {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={showAlertMessage}
      onClose={closeAlert}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
}

const mapStatesToProps = ({ alert }) => {
  return alert;
};

const mapActionsToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};

export default connect(mapStatesToProps, mapActionsToProps)(AlertNotification);
