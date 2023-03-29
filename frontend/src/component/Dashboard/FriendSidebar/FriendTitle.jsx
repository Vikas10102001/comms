import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
const MainContainer = styled("div")({
  width: "100%",
});
export default function FriendTitle({ title, isOpen ,setIsOpen}) {
  const handleFriendList = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MainContainer>
      <Typography
        sx={{
          color: "#8E9297",
          textTransform: "uppercase",
          fontSize: "14px",
          marginTop: "10px",
          marginLeft: "10px",
          marginRight: "10px",
          borderTop: "1px solid #474545",
          display: "flex",
          justifyContent: "space-between",
          cursor:"pointer"
        }}
        onClick={handleFriendList}
      >
        {title}
        {isOpen ? <KeyboardArrowDownIcon /> : <KeyboardControlKeyIcon />}
      </Typography>
    </MainContainer>
  );
}
