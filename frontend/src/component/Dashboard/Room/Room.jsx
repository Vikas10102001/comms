import { React, useState } from "react";
import { styled } from "@mui/system";
import RoomResizeButton from "./RoomResizeButton";
import VideoContainer from "./VideoContainer";
import RoomButtonsContainer from "./RoomButtonsContainer";

const MainContainer = styled("div")({
  position: "absolute",
  backgroundColor: "#202225",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "8px",
});

const fullScreenRoomStyle = {
  width: "100%",
  height: "100vh",
};

const minScreenRoomStyle = {
  bottom: "0",
  right: 0,
  width: "30%",
  height: "40vh",
};
export default function Room() {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);

  const handleResize = () => {
    setIsRoomMinimized(!isRoomMinimized);
  };
  return (
    <MainContainer
      style={isRoomMinimized ? minScreenRoomStyle : fullScreenRoomStyle}
    >
      <VideoContainer />
      <RoomButtonsContainer />
      <RoomResizeButton
        handleResize={handleResize}
        isRoomMinimized={isRoomMinimized}
      />
    </MainContainer>
  );
}
