import React from "react";
import { styled } from "@mui/system";
import RoomButton from "./RoomButton";
import ActiveRoomButton from "./ActiveRoomButton";
import { connect } from "react-redux";
import GroupDialog from "./GroupDialog";
import FriendSideBarToggleButton from "./FriendSideBarToggleButton";

const MainContainer = styled("div")({
  width: "4vw",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#202225",
  "@media (max-width:1300px)":{
    width:'10vw'
  },
  "@media (max-width:660px)":{
    width:'50px'
  }
});
function Sidebar({ activeRooms, hasUserJoined }) {
  return (
    <MainContainer>
      <FriendSideBarToggleButton/>
      <GroupDialog />
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
