import React, { useState } from "react";
import FriendTitle from "../FriendTitle";
import { styled } from "@mui/system";
import GroupsList from "./GroupsList";

const Wrapper = styled("div")({
  flex: 1,
});

export default function Groups() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Wrapper>
      <FriendTitle title="Groups" isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <GroupsList />}
    </Wrapper>
  );
}


