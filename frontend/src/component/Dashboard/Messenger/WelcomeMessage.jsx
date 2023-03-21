import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  flexGrow: 1,
});

export default function WelcomeMessage() {
  return (
    <Wrapper>
      <Typography varient="h6" sx={{ color: "white" }}>
        To start chatting - choose conversation{" "}
      </Typography>
    </Wrapper>
  );
}
