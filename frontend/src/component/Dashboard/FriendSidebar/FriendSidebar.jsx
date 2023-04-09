import React from "react";
import { styled } from "@mui/system";
import AddFriendButton from "./AddFriendButton";
import Friends from "./Friends/Friends";
import Invitations from "./PendingInvitations/Invitations";
import Groups from "./Groups/Groups";
import { useSelector } from "react-redux";

const MainContainer = styled("div")({
  width: "16vw",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#2F3136",
  zIndex: 1,
  "@media (max-width:1300px)": {
    width: "25vw",
  },
  "@media (max-width:660px)": {
    width: "300px",
  },
});
export default function FriendSidebar() {
  const toggle = useSelector((state) => {
    return state.toggle.friendSideBarToggle;
  });
  return (
    toggle && (
      <MainContainer>
        <AddFriendButton />
        <Friends />
        <Groups />
        <Invitations />
      </MainContainer>
    )
  );
}
