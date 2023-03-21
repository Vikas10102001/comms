import { React, useState } from "react";
import { IconButton } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";

export default function Camera({ localStream }) {
  const [cameraIsOff, setCameraIsOff] = useState(false);

  const toggleCamera = () => {
    localStream.getVideoTracks()[0].enabled = cameraIsOff;
    setCameraIsOff(!cameraIsOff);
  };
  return (
    <IconButton onClick={toggleCamera} style={{ color: "white" }}>
      {cameraIsOff ? <VideocamOffIcon /> : <VideocamIcon />}
    </IconButton>
  );
}
