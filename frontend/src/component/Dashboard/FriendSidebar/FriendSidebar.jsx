import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";
import Friends from "./Friends/Friends";
import Invitations from "./PendingInvitations/Invitations";
import Groups from "./Groups/Groups";

const MainContainer = styled("div")({
  width: "224px",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#2F3136",
});
export default function FriendSidebar() {
  return (
    <MainContainer>
      <AddFriendButton />
      <Friends />
      <Groups />
      <Invitations />
    </MainContainer>
  );
}
