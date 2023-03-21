import React, { useEffect, useState } from "react";
// import { Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import LabeledInput from "../../shared/component/LabeledInput";
import CustomPrimaryButton from "../../shared/component/CustomPrimaryButton";
import { getActions } from "../../../store/actions/friendsAction";
import { connect } from "react-redux";

function AddFriendDialog({
  dialogIsOpen,
  dialogCloseHandler,
  email,
  setEmail,
  sendFriendInvitation
}) {
  const [isFormValid, setFormIsValid] = useState(false);
  const friendInvitationHandler = () => {
    sendFriendInvitation({email},dialogCloseHandler)
  };
  useEffect(() => {
    const validateEmail =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    setFormIsValid(validateEmail);
  }, [email, isFormValid]);
  return (
    <>
      <Dialog open={dialogIsOpen} onClose={dialogCloseHandler}>
        <DialogTitle>Invite a friend</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter e-mail address of a friend which you would like to invite
          </DialogContentText>
          <LabeledInput
            type="email"
            placeholder="Enter e-mail address"
            value={email}
            setValue={setEmail}
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            label="Send"
            disabled={!isFormValid}
            onClick={friendInvitationHandler}
            additionalStyles={{ margin: "0 15px 15px 15px" }}
          />
        </DialogActions>
      </Dialog>
    </>
  );
}
const mapActionToProps=(dispatch)=>{
  return {
    ...getActions(dispatch)
  }
}
export default connect(null,mapActionToProps)(AddFriendDialog)
