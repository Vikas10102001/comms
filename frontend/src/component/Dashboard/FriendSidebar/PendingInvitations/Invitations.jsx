import React, { useState } from "react";
import FriendTitle from "../FriendTitle";
import PendingInvitationsList from "./PendingInvitationsList";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  flex: 1,
});
export default function Invitations() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Wrapper>
      <FriendTitle title="Invitations" isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <PendingInvitationsList />}
    </Wrapper>
  );
}
