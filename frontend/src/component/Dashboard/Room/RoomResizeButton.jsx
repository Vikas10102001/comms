import React from "react";
import { styled } from "@mui/system";
import { IconButton } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const MainContainer = styled("div")({
  position: "absolute",
  bottom: "7px",
  right: "10px ",
});

export default function RoomResizeButton({ handleResize, isRoomMinimized }) {
  return (
    <MainContainer>
      <IconButton onClick={handleResize} style={{ color: "white" }}>
        {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullscreenIcon />}
      </IconButton>
    </MainContainer>
  );
}
