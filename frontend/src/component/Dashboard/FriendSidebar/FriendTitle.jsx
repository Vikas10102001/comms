import React from "react";
import { Typography } from "@mui/material";
export default function FriendTitle({ title }) {
  return (
    <Typography
      sx={{
        color: "#8E9297",
        textTransform: "uppercase",
        fontSize: "14px",
        marginTop: "10px",
      }}
    >
      {title}
    </Typography>
  );
}
