import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";
import FriendTitle from "./FriendTitle";
import FriendsList from "./FriendsList/FriendsList";
import PendingInvitationsList from "./PendingInvitationsList/PendingInvitationsList";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#2F3136",
});
export default function FriendSidebar() {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendTitle title="Private Messages" />
      <FriendsList />
      <FriendTitle title="Invitations" />
      <PendingInvitationsList />
    </MainContainer>
  );
}
