import React from "react";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RedirectText = styled("span")({
  color: "#00AFF4",
  fontWeight: 500,
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
});
export default function RedirectingComponent({ text, redirectText,redirectPath }) {
  return (
    <Typography
      variant="subtitle2"
      sx={{ color: "#7C727D", marginTop: "20px", textAlign: "center" }}
    >
      {text} <Link to={redirectPath}><RedirectText>{redirectText}</RedirectText></Link>
    </Typography>
  );
}
