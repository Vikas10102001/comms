import { React, useState } from "react";
import { IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

export default function Mic({ localStream }) {
  const [micIsOff, setMicIsOff] = useState(false);

  const toggleMic = () => {
    localStream.getAudioTracks()[0].enabled = micIsOff;
    setMicIsOff(!micIsOff);
  };
  return (
    <IconButton onClick={toggleMic} style={{ color: "white" }}>
      {micIsOff ? <MicOffIcon /> : <MicIcon />}
    </IconButton>
  );
}
