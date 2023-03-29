import React from "react";
import { chatTypes, getActions } from "../../../../store/actions/chatAction";
import store from "../../../../store/store";
import { setCurrentConversation } from "../../../../store/actions/chatAction";
import { Typography, Button, Avatar } from "@mui/material";
import { connect } from "react-redux";
function GroupsListItem({
  name,
  id,
  admin,
  setChosenChatDetails,
  date,
  conversation,
}) {
  const avatar = name[0] + name[1] + name[2];
  const handleChooseActiveConversation = () => {
    store.dispatch(setCurrentConversation(conversation._id));
    setChosenChatDetails(
      {
        groupId: id,
        username: name,
        admin: admin,
        date: date,
        members: conversation.participants,
      },
      chatTypes.GROUP
    );
  };
  return (
    <Button
      sx={{
        width: "100%",
        height: "42px",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "black",
        position: "relative",
        textTransform: "none",
      }}
      onClick={handleChooseActiveConversation}
    >
      <Avatar
        sx={{
          width: 32,
          height: 32,
          fontSize: 12,
          bgcolor: "#5865f2",
          textTransform: "uppercase",
        }}
      >
        {avatar}
      </Avatar>
      <Typography
        sx={{ marginLeft: "7px", fontWeight: 700, color: "#8E9297" }}
        variant="subtitle1"
      >
        {name}
      </Typography>
    </Button>
  );
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(null, mapActionsToProps)(GroupsListItem);
