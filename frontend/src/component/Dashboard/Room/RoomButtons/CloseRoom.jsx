import React from "react";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { leaveRoomHandler } from "../../../../realtimeCommunication/roomHandler";

export default function Camera() {
  const roomCloseHandler = () => {
    leaveRoomHandler()
  };
  return (
    <IconButton onClick={roomCloseHandler} style={{ color: "white" }}>
      <CloseIcon />
    </IconButton>
  );
}
