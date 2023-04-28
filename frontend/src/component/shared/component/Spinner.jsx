import { styled } from "@mui/system";
import React from "react";
import { PacmanLoader } from "react-spinners";
const SpinnerOverlay = styled("div")({
  display: "flex",
  position: "absolute",
  top: 0,
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  background: "rgba(0,0,0,0.7)",
});
export default function Spinner() {
  return (
    <SpinnerOverlay>
      <PacmanLoader color="#5865F2" />
    </SpinnerOverlay>
  );
}
