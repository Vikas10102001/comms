import React from "react";
import { styled } from "@mui/system";
import MainPageButton from "./MainPageButton";
import RoomButton from "./RoomButton";
import ActiveRoomButton from "./ActiveRoomButton";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  width: "72px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
});
function Sidebar({ activeRooms, hasUserJoined }) {
  return (
    <MainContainer>
      <MainPageButton />
      <RoomButton />
      {activeRooms.map((room) => {
        return (
          <ActiveRoomButton
            key={room.roomId}
            id={room.roomId}
            creator={room.roomCreator}
            participantsAmount={room.participants.length}
            hasUserJoined={hasUserJoined}
          />
        );
      })}
    </MainContainer>
  );
}

const mapStatesToProps = ({ room }) => {
  return room;
};

export default connect(mapStatesToProps)(Sidebar);
