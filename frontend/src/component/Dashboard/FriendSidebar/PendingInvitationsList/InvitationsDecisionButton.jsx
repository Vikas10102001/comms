import React from "react";
import { Check, Clear } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
export default function InvitationsDecisionButton({
  disabled,
  acceptInvitationHandler,
  rejectInvitationHandler,
}) {
  return (
    <Box sx={{ display: "flex" }}>
      <IconButton
        sx={{ color: "white"}}
        disabled={disabled}
        onClick={acceptInvitationHandler}
      >
        <Check />
      </IconButton>
      <IconButton
        sx={{ color: "white", marginRight: 2 }}
        disabled={disabled}
        onClick={rejectInvitationHandler}
      >
        <Clear />
      </IconButton>
    </Box>
  );
}
