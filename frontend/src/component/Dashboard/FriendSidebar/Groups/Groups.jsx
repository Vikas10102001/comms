import React, { useState } from "react";
import FriendTitle from "../FriendTitle";
import { styled } from "@mui/system";
import GroupsList from "./GroupsList";
import GroupMembersModal from "./GroupMembersModal";
import { connect } from "react-redux";

const Wrapper = styled("div")({
  overflowY: "auto",
  overflowX: "none",
});

function Groups({ groupMembersModalIsOpen }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Wrapper>
      <FriendTitle title="Groups" isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && <GroupsList />}
      {groupMembersModalIsOpen && <GroupMembersModal />}
    </Wrapper>
  );
}

const mapStatesToProps = ({ group }) => {
  return group;
};

export default connect(mapStatesToProps)(Groups);
