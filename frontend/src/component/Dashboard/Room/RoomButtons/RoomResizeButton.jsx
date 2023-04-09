import React from "react";
import { IconButton } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

export default function RoomResizeButton({ handleResize, isRoomMinimized }) {
  return (
    <IconButton onClick={handleResize} style={{ color: "white" }}>
      {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
    </IconButton>
  );
}
