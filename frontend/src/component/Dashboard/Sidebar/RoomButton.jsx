import React from "react";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import { openRoomHandler } from "../../../realtimeCommunication/roomHandler";

export default function MainPageButton() {
  const createNewRoomHandler = () => {
    openRoomHandler();
  };
  return (
    <Button
      onClick={createNewRoomHandler}
      sx={{
        width: "48px",
        height: "48px",
        color: "white",
        borderRadius: "16px",
        minWidth: 0,
        margin: 0,
        padding: 0,
        backgroundColor: "#5865F2",
        marginTop: "10px",
        "@media (max-width:665px)": {
          width: "32px",
          height: "32px",
          borderRadius: "12px",
        },
      }}
    >
      <Add />
    </Button>
  );
}
