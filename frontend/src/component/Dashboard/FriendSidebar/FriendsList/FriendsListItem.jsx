import React from "react";
import { Typography, Button, Avatar } from "@mui/material";
import OnlineIndicator from "./OnlineIndicator";
import { getActions, chatTypes } from "../../../../store/actions/chatAction";
import { connect } from "react-redux";

function FriendsListItem({ username, isOnline, id, setChosenChatDetails }) {
  const avatar = username[0] + username[1] + username[2];

  const handleChooseActiveConversation = () => {
    setChosenChatDetails({ id: id, username: username }, chatTypes.DIRECT);
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
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
}

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(null, mapActionsToProps)(FriendsListItem);
