import { styled } from "@mui/system";
import React from "react";
import { Typography, Avatar } from "@mui/material";

const MainContainer = styled("div")({
  marginTop: "10px",
  width: "98%",
});
export default function MessageHeader({
  username,
  chatType,
  admin,
  groupCreateDate,
}) {
  const avatar = username[0] + username[1] + username[2];
  groupCreateDate=groupCreateDate?.split('T')[0]
  const text = `${
    chatType === "DIRECT"
      ? "This is the begining of the conversation with " + username
      : admin.username + " created this group on " + groupCreateDate
  }`;
  return (
    <MainContainer>
      <Avatar
        sx={{
          width: 72,
          height: 72,
          fontSize: 16,
          bgcolor: "#5865f2",
          textTransform: "uppercase",
        }}
      >
        {avatar}
      </Avatar>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "white",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        {username}
      </Typography>

      <Typography
        sx={{
          color: "#b9bbbe",
          marginLeft: "5px",
          marginRight: "5px",
        }}
      >
        {text}
      </Typography>
    </MainContainer>
  );
}
