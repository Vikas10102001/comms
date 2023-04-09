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
  "@media (max-width:660px)": {
    width: "calc(100vw - 50px)",
    position: "absolute",
    right: "0",
    height: "calc(100vh - 48px)",
  },
});

function Messenger({ chosenChatDetails, chatType }) {
  return (
    <MainContainer>
      {chosenChatDetails ? (
        <MessageContent
          chosenChatDetails={chosenChatDetails}
          chatType={chatType}
        />
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
