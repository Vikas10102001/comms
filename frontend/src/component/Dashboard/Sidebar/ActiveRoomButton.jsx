import { IconButton, Avatar, Tooltip } from "@mui/material";
import React from "react";
import { joinRoomHandler } from "../../../realtimeCommunication/roomHandler";

export default function ActiveRoomButton({
  id,
  creator,
  participantsAmount,
  hasUserJoined,
}) {
  const avatar =
    creator.username[0] + creator.username[1] + creator.username[2];
  const activeRoomButtonDisabled = participantsAmount > 3;
  const handleRoomJoin = () => {
    if (participantsAmount < 4) joinRoomHandler(id);
  };
  return (
    <Tooltip
      title={
        "Creator : " +
        creator.email +
        `(${creator.username}) , Participants : ${participantsAmount} `
      }
    >
      <span>
        <IconButton
          onClick={handleRoomJoin}
          disabled={hasUserJoined || activeRoomButtonDisabled}
          sx={{
            width: "48px",
            height: "48px",
            color: "white",
            borderRadius: "16px",
            minWidth: 0,
            margin: 0,
            padding: 0,

            marginTop: "10px",
            ":hover": { backgroundColor: "#5865F2" },
          }}
        >
          <Avatar
            sx={{
              fontSize: 12,
              textTransform: "uppercase",
            }}
          >
            {avatar}
          </Avatar>
        </IconButton>
      </span>
    </Tooltip>
  );
}
