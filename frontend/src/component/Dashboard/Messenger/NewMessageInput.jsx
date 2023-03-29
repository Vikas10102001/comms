import { React, useState } from "react";
import { styled } from "@mui/system";
import {
  getCurrentConversation,
  handleDirectMessage,
  handleGroupMessage,
} from "../../../realtimeCommunication/connectSocketServer";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginBottom: "10px",
});

const Input = styled("input")({
  width: "98%",
  flexGrow: 1,
  height: "40px",
  border: "1px solid black",
  borderRadius: "5px",
  color: "#dcddde",
  background: "#35393f",
  margin: 0,
  fontSize: "14px",
  padding: "0 5px",
});

export default function NewMessageInput({ username, id, groupId, chatType }) {
  const [message, setMessage] = useState("");
  const messageOnChangeHandler = (event) => {
    setMessage(event.target.value);
  };
  const messageKeyPressHandler = (event) => {
    if (event.code === "Enter") {
      if (chatType === "DIRECT") {
        getCurrentConversation({ recieverId: id });
        handleDirectMessage({ recieverId: id, content: message });
      } else if (chatType === "GROUP")
        handleGroupMessage({ groupId: groupId, content: message });
      setMessage("");
    }
  };
  return (
    <Wrapper>
      <Input
        type="text"
        placeholder={`Write message to '${username}'`}
        value={message}
        onChange={messageOnChangeHandler}
        onKeyDown={messageKeyPressHandler}
      />
    </Wrapper>
  );
}
