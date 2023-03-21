import React from "react";
import { styled } from "@mui/system";

const Separater = styled("div")({
  width: "95%",
  height: "0.5px",
  position: "relative",
  background: "#b9bbbe",
  marginTop: "20px",
  marginBottom: "10px",
});
const Label = styled("span")({
  position: "absolute",
  left: "45%",
  color: "#b9bbbe",
  fontSize:'14px',
  top: "-10px",
  background:"#36393f",
  padding:"0 5px"
});
export default function DateSeparater({ date }) {
  return (
    <Separater>
      <Label>{date}</Label>
    </Separater>
  );
}
