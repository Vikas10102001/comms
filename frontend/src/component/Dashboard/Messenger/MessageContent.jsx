import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./Messages/Messages";
import NewMessageInput from "./NewMessageInput";
import { getDirectChatHistory } from "../../../realtimeCommunication/connectSocketServer";

const Wrapper = styled("div")({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background:"#36393f"
});
export default function MessageContent({ chosenChatDetails }) {
  useEffect(() => {
    getDirectChatHistory({recieverId:chosenChatDetails.id})
  }, [chosenChatDetails]);
  return (
    <Wrapper>
      <Messages />
      <NewMessageInput
        username={chosenChatDetails.username}
        id={chosenChatDetails.id}
      />
    </Wrapper>
  );
}
