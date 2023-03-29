import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Messages from "./Messages/Messages";
import NewMessageInput from "./NewMessageInput";
import {
  getDirectChatHistory,
  getGroupChatHistory,
} from "../../../realtimeCommunication/connectSocketServer";

const Wrapper = styled("div")({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  background: "#36393f",
});
export default function MessageContent({ chosenChatDetails, chatType }) {
  useEffect(() => {
    if (chatType === "DIRECT")
      getDirectChatHistory({ recieverId: chosenChatDetails.id });
    else {
      getGroupChatHistory({ groupId: chosenChatDetails.groupId });
    }
  }, [chosenChatDetails, chatType]);
  return (
    <Wrapper>
      <Messages />
      <NewMessageInput
        username={chosenChatDetails.username}
        id={chosenChatDetails.id}
        groupId={chosenChatDetails.groupId}
        chatType={chatType}
      />
    </Wrapper>
  );
}
