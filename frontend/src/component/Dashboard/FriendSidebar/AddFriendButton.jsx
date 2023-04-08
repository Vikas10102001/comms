import React, { useState } from "react";
import CustomPrimaryButton from "../../shared/component/CustomPrimaryButton";
import AddFriendDialog from "./AddFriendDialog";

export default function AddFriendButton() {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const additionalStyles = {
    marginTop: "10px",
    marginLeft: "5px",
    width: "80%",
    height: "30px",
    background: "#3BA55D",
    flex: 0,
  };
  const dialogOpenAddFriendHandler = () => {
    setDialogIsOpen(true);
  };
  const dialogAddFriendCloseHandler = () => {
    setDialogIsOpen(false);
    setEmail("");
  };
  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={dialogOpenAddFriendHandler}
      ></CustomPrimaryButton>
      <AddFriendDialog
        dialogIsOpen={dialogIsOpen}
        dialogCloseHandler={dialogAddFriendCloseHandler}
        email={email}
        setEmail={setEmail}
      />
    </>
  );
}
