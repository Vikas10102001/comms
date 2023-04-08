import React, { useState } from "react";
import FriendsList from "./FriendsList";
import FriendTitle from "../FriendTitle";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  flex: 1,
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
