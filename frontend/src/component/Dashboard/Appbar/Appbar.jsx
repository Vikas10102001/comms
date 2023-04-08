import React from "react";
import { styled } from "@mui/system";
import DropdownMenu from "./DropdownMenu";
import ChosenOptionLabel from "./ChosenOptionLabel";
import GroupDetailsDropdown from "./GroupDetailsDropdown";
import { connect } from "react-redux";
const MainContainer = styled("div")({
  position: "absolute",
  top: 0,
  right: 0,
  height: "48px",
  borderBottom: "1px solid #474545",
  backgroundColor: "#36393F",
  width: "calc(100vw - 20vw)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 15px",
  boxSizing: "border-box",
});

function Appbar({ chatType }) {
  return (
    <MainContainer>
      <ChosenOptionLabel />
      {chatType === "GROUP" && <GroupDetailsDropdown />}
      <DropdownMenu />
    </MainContainer>
  );
}

const mapStatesToProps = ({ chat }) => {
  return chat;
};
export default connect(mapStatesToProps)(Appbar);
