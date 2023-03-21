import React, { useEffect } from "react";
import { styled } from "@mui/system";
import Sidebar from "./Sidebar/Sidebar";
import FriendSidebar from "./FriendSidebar/FriendSidebar";
import Messenger from "./Messenger/Messenger";
import Appbar from "./Appbar/Appbar";
import { logout } from "../shared/utils/auth";
import { connectWithSocketServer } from "../../realtimeCommunication/connectSocketServer";
import Room from "./Room/Room";
import { connect } from "react-redux";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

function Dashboard({ hasUserJoined }) {
  useEffect(() => {
    const userDetail = JSON.parse(localStorage.getItem("user"));
    if (!userDetail) logout();
    else {
      connectWithSocketServer(userDetail);
    }
  }, []);
  return (
    <Wrapper>
      <Sidebar />
      <FriendSidebar />
      <Messenger />
      <Appbar />
      {hasUserJoined && <Room />}
    </Wrapper>
  );
}

const mapStatesToProps = ({ room }) => {
  return room;
};

export default connect(mapStatesToProps)(Dashboard);
