import React from "react";
import { styled } from "@mui/system";
import FriendsListItem from "./FriendsListItem";
import { connect } from "react-redux";

const MainContainer = styled("div")({
  overflowY: "auto",
  overflowX: "hidden",
  height: "calc((100vh - 40px) / 3 - 25px)",
});
function FriendsList({ friends, onlineUsers }) {
  return (
    <MainContainer>
      
      {friends.map((f) => {
        return (
          <FriendsListItem
            key={f._id}
            username={f.username}
            id={f._id}
            isOnline={onlineUsers.includes(f._id)}
          />
        );
      })}
    </MainContainer>
  );
}

const mapStatesToProps = ({ friend }) => {
  return friend;
};

export default connect(mapStatesToProps)(FriendsList);
