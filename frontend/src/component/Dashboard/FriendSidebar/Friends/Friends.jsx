import React, { useState } from "react";
import FriendsList from "./FriendsList";
import FriendTitle from "../FriendTitle";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  overflowY: "auto",
  overflowX: "none",
});
export default function Friends() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Wrapper>
      <FriendTitle
        title="Private Messages"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {isOpen && <FriendsList />}
    </Wrapper>
  );
}
