import { React } from "react";
import { IconButton } from "@mui/material";
import ScreenShareIcon from "@mui/icons-material/ScreenShare";
import StopScreenShareIcon from "@mui/icons-material/StopScreenShare";
import { switchOutgoingTracks } from "../../../../realtimeCommunication/webRTCHandler";

export default function ScreenShare({ props }) {
  const {
    isScreenSharing,
    screenSharingStream,
    setScreenSharingStream,
    localStream,
  } = props;

  const toggleScreenSharing = async () => {
    if (!isScreenSharing) {
      let stream = null;
      stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false,
      });

      if (stream) {
        setScreenSharingStream(stream);
        switchOutgoingTracks(stream);
      }
    } else {
      switchOutgoingTracks(localStream);
      const stream = screenSharingStream;
      setScreenSharingStream(null);
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    }
  };
  return (
    <IconButton onClick={toggleScreenSharing} style={{ color: "white" }}>
      {isScreenSharing ? <StopScreenShareIcon /> : <ScreenShareIcon />}
    </IconButton>
  );
}
