import React from "react";
import { FiberManualRecordRounded } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function OnlineIndicator() {
  return (
    <Box
      sx={{
        color: "#3ba55d",
        display: "flex",
        alignItems: "center",
        position: "absolute",
        right: "10px",
      }}
    >
      <FiberManualRecordRounded sx={{ height: 15, width: 15 }} />
    </Box>
  );
}
