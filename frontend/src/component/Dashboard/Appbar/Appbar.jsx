import React from "react";
import { styled } from "@mui/system";
import DropdownMenu from "./DropdownMenu";
import ChosenOptionLabel from "./ChosenOptionLabel";
import GroupDetailsDropdown from "./GroupDetailsDropdown";
import { connect, useSelector } from "react-redux";
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
  zIndex: 0,
  "@media (max-width:1300px)": {
    width: "calc(100vw - 35vw)",
  },
  "@media (max-width:660px)": {
    width: "calc(100vw - 50px)",
    justifyContent: "end",
  },
});

function Appbar({ chatType }) {
  const friendSideBarToggle = useSelector((state) => {
    return state.toggle.friendSideBarToggle;
  });

  const friendSideBarCloseStyle = {
    width: "calc(100vw - 4vw)",

    "@media (max-width:1300px)": {
      width: "90vw",
    },
    "@media (max-width:660px)": {
      width: "calc(100vw - 50px)",
    },
  };
  return (
    <MainContainer sx={!friendSideBarToggle ? friendSideBarCloseStyle : {}}>
      {!window.innerWidth < '660px' && <ChosenOptionLabel />}
      {chatType === "GROUP" && <GroupDetailsDropdown />}
      <DropdownMenu />
    </MainContainer>
  );
}

const mapStatesToProps = ({ chat }) => {
  return chat;
};
export default connect(mapStatesToProps)(Appbar);
