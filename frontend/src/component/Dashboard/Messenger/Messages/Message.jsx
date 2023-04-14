import styled from "@emotion/styled";
import { Avatar, Typography } from "@mui/material";
import React from "react";

const MainContainer = styled("div")({
  marginTop: "5px",
  display: "flex",
  width: "100%",
});

const SameAuthorTextContainer = styled("div")({
  width: "100%",
  color: "#DCDDDE",
});

const AvatarContainer = styled("div")({
  width: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const MessageContent = styled("div")({
  fontSize: 14,
  color: "#DCDDDE",
});
const MessageContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});
const LeftRemovedContainer = styled("div")({
  width: "100%",
  color: "red",
  marginTop: "10px",
});
export default function Message({ message, sameDay, sameAuthor }) {
  const username = message.author.username;
  const avatar = username[0] + username[1] + username[2];

  if (sameDay && sameAuthor) {
    return (
      <SameAuthorTextContainer>
        <span style={{ marginLeft: "70px", fontSize: 14 }}>
          {message.content}
        </span>
      </SameAuthorTextContainer>
    );
  }
  if (message.variant === "USER_LEFT" || message.variant == "USER_REMOVED") {
    return (
      <LeftRemovedContainer>
        {message.content}
        <span style={{ fontSize: "12px", color: "#72767D", marginLeft: "5px" }}>
          {message.date.split("T")[0]}
        </span>
      </LeftRemovedContainer>
    );
  }
  return (
    <MainContainer>
      <AvatarContainer>
        <Avatar
          sx={{
            width: 38,
            height: 38,
            fontSize: 12,
            bgcolor: "#5865f2",
            textTransform: "uppercase",
          }}
        >
          {avatar}
        </Avatar>
      </AvatarContainer>
      <MessageContainer>
        <Typography sx={{ color: "white", fontSize: "16px" }}>
          {message.author.username}
          <span
            style={{ fontSize: "12px", color: "#72767D", marginLeft: "5px" }}
          >
            {message.date.split("T")[0]}
          </span>
        </Typography>
        <MessageContent>{message.content}</MessageContent>
      </MessageContainer>
    </MainContainer>
  );
}
