import { React, useState } from "react";
import { styled } from "@mui/system";
import {
  handleDirectMessage,
  handleGroupMessage,
} from "../../../realtimeCommunication/connectSocketServer";
import CustomPrimaryButton from "../../shared/component/CustomPrimaryButton";

const Wrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
  const handleSendMessageButton = () => {
    if (chatType === "DIRECT") {
      handleDirectMessage({ recieverId: id, content: message });
    } else if (chatType === "GROUP")
      handleGroupMessage({ groupId: groupId, content: message });
    setMessage("");
  };
  const messageKeyPressHandler = (event) => {
    if (event.code === "Enter") {
      if (chatType === "DIRECT") {
        handleDirectMessage({ recieverId: id, content: message });
      } else if (chatType === "GROUP") {
        handleGroupMessage({ groupId: groupId, content: message });
      }
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
      <CustomPrimaryButton
        label="send"
        onClick={handleSendMessageButton}
        additionalStyles={{ width: "5vw" }}
        disabled={message.trim() === ""}
      />
    </Wrapper>
  );
}
