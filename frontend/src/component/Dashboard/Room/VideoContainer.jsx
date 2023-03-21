import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import Video from "./Video";
const MainContainer = styled("div")({
  width: "100%",
  height: "85%",
  display: "flex",
  flexWrap: "wrap",
});
function VideoContainer({
  isLocalStream,
  localStream,
  remoteStream,
  screenSharingStream,
}) {
 
  return (
    <MainContainer>
      <Video
        stream={screenSharingStream ? screenSharingStream : localStream}
        isLocalStream={isLocalStream}
      />
      {remoteStream.map((stream) => {
        return <Video stream={stream} key={stream.id} />;
      })}
    </MainContainer>
  );
}

const mapStatesToProps = ({ room }) => {
  return room;
};
export default connect(mapStatesToProps)(VideoContainer);
