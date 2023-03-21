import { React, useRef, useEffect } from "react";
import { styled } from "@mui/system";

const MainContainer = styled("div")({
  height: "50%",
  width: "50%",
  borderRadius: "8px",
  backgroundColor: "black ",
  display:"flex",
});

const VideoEl = styled("video")({
  width: "100%",
  height: "100%",
});
export default function Video({ stream, isLocalStream }) {
  const videoRef = useRef();
  useEffect(() => {
    const video = videoRef.current;
    video.srcObject = stream;
    video.onLoadedMetaData = () => {
      video.play();
    };
  }, [stream]);
  return (
    <MainContainer>
      <VideoEl
        ref={videoRef}
        autoPlay
        muted={isLocalStream ? true : false}
      ></VideoEl>
    </MainContainer>
  );
}
