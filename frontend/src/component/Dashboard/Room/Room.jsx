import { React, useState } from "react";
import { styled } from "@mui/system";
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
  width: "96%",
  height: "100vh",
  right: 0,
};

const minScreenRoomStyle = {
  bottom: "0",
  right: 0,
  width: "30%",
  height: "40vh",
  "@media (max-width:660px)": {
    width: "50%",
  },
  "@media (max-width:440px)": {
    width: "70%",
  },
};
export default function Room() {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);

  const handleResize = () => {
    setIsRoomMinimized(!isRoomMinimized);
  };
  return (
    <MainContainer
      sx={isRoomMinimized ? minScreenRoomStyle : fullScreenRoomStyle}
    >
      <VideoContainer />
      <RoomButtonsContainer
        handleResize={handleResize}
        isRoomMinimized={isRoomMinimized}
      />
    </MainContainer>
  );
}
