import React from "react";
import { Button } from "@mui/material";
import { Groups} from "@mui/icons-material";

export default function MainPageButton() {
  return (
    <Button
      sx={{
        width: "48px",
        height: "48px",
        color: "white",
        borderRadius: "16px",
        minWidth:0,
        margin: 0,
        padding: 0,
        backgroundColor: "#5865F2",
        marginTop: "10px",
      }}
    >
      <Groups/>
    </Button>
  );
}
