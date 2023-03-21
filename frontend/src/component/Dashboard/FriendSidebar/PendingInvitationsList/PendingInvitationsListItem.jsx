import { Avatar, Tooltip, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import InvitationsDecisionButton from "./InvitationsDecisionButton";
import { connect } from "react-redux";
import { getActions } from "../../../../store/actions/friendsAction";

function PendingInvitationsListItem({
  username,
  id,
  email,
  acceptFriendInvitation ,
  rejectFriendInvitation
}) {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const avatar = username[0] + username[1] + username[2];
  const handleAcceptInvitation = () => {
    acceptFriendInvitation({ id });
    setButtonDisabled(true);
  };
  const handleRejectInvitation = () => {
    rejectFriendInvitation({ id });
    setButtonDisabled(true);
  };

  return (
    <Tooltip title={email} placement="top">
      <div style={{ width: "100%" }}>
        <Box
          sx={{
            width: "100%",
            height: "42px",
            mardinTop: "10px",
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
          }}
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
            sx={{
              marginLeft: "7px",
              marginTop:'7px',
              flexGrow: 1,
              fontWeight: 700,
              color: "#8e9297",
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitationsDecisionButton
            disabled={buttonDisabled}
            acceptInvitationHandler={handleAcceptInvitation}
            rejectInvitationHandler={handleRejectInvitation}
          />
        </Box>
      </div>
    </Tooltip>
  );
}

const mapActionsToProps=(dispatch)=>{
  return {
    ...getActions(dispatch)
  }
}

export default connect(null,mapActionsToProps)(PendingInvitationsListItem)