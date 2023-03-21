import React from "react";
import { connect } from "react-redux";
import { Typography } from "@mui/material";

function ChosenOptionLabel({ chosenChatDetails }) {
  return (
    <Typography sx={{ fontSize: "16px", fontWeight: "bold", color: "white" }}>
      {chosenChatDetails
        ? "Chosen conversation - " + chosenChatDetails.username
        : " "}
    </Typography>
  );
}

const mapStatesToProps = ({ chat }) => {
  return chat;
};
export default connect(mapStatesToProps)(ChosenOptionLabel);
