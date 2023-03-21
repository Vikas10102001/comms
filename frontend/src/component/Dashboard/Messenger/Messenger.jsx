import React from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import MessageContent from "./MessageContent";
import WelcomeMessage from "./WelcomeMessage";

const MainContainer = styled("div")({
  flexGrow: 1,
  backgroundColor: "#36393F",
  marginTop: "48px",
  display: "flex",
});

function Messenger({ chosenChatDetails }) {
  return (
    <MainContainer>
      {chosenChatDetails ? (
        <MessageContent chosenChatDetails={chosenChatDetails} />
      ) : (
        <WelcomeMessage />
      )}
    </MainContainer>
  );
}

const mapStatesToProps = ({ chat }) => {
  return chat;
};
export default connect(mapStatesToProps)(Messenger);
