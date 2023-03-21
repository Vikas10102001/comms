import React from "react";
import { styled } from "@mui/system";
import PendingInvitationsListItem from "./PendingInvitationsListItem";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  width: "100%",
  height: "22%",
  display: "flex",
  flexDirection: "column",
  marginTop: 10,
  marginLeft: 20,
  alignItems: "center",
  overflow: "auto",
});

function PendingInvitationsList({pendingFriendsInvitation}) {
  return (
    <MainContainer>
      {pendingFriendsInvitation.map((el) => {
        return (
          <PendingInvitationsListItem
            key={el._id}
            id={el._id}
            username={el.senderId.username}
            email={el.senderId.email}
          />
        );
      })}
    </MainContainer>
  );
}
const mapStateToProps=({friend})=>{
  return friend
}

export default connect(mapStateToProps)(PendingInvitationsList)