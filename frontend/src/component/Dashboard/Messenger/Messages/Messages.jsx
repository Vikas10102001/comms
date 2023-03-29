import { styled } from "@mui/system";
import React from "react";
import MessageHeader from "./MessageHeader";
import DateSeparater from "./DateSeparater";
import { connect } from "react-redux";

import Message from "./Message";

const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "calc(100% - 60px)",
  overflow: "auto",
  alignItems: "center",
});
const checkDate = (date1, date2) => {
  date1 = date1.split("T")[0];
  date2 = date2.split("T")[0];

  return date1 === date2;
};
function Messages({ chosenChatDetails, messages, chatType }) {
  return (
    <MainContainer>
      <MessageHeader
        username={chosenChatDetails?.username}
        chatType={chatType}
        admin={chosenChatDetails?.admin}
        groupCreateDate={chosenChatDetails?.date}
      />
      {messages.map((message, ind) => {
        let sameAuthor = false;
        let sameDay = false;
        if (ind > 0) {
          if (messages[ind - 1].author._id === messages[ind].author._id) {
            sameAuthor = true;
          }
          sameDay = checkDate(messages[ind - 1].date, messages[ind].date);
        }
        return (
          <div key={message._id} style={{ width: "98%" }}>
            {(!sameDay || ind === 0) && (
              <DateSeparater date={message.date.split("T")[0]} />
            )}
            <Message
              message={message}
              sameDay={sameDay}
              sameAuthor={sameAuthor}
            />
          </div>
        );
      })}
    </MainContainer>
  );
}

const mapStatesToProps = ({ chat, group }) => {
  return { ...chat, ...group };
};
export default connect(mapStatesToProps)(Messages);
