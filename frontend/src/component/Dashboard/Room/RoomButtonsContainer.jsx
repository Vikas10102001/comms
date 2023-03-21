import React from "react";
import { styled } from "@mui/system";
import Camera from "./RoomButtons/Camera";
import Mic from "./RoomButtons/Mic";
import ScreenShare from "./RoomButtons/ScreenShare";
import CloseRoom from "./RoomButtons/CloseRoom";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/roomAction";

const MainContainer = styled("div")({
  width: "100%",
  height: "15%",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "8px",
  background: "#5865f2",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
function RoomButtonsContainer(props) {
  const { localStream,audioOnly } = props;
 
  return (
    <MainContainer>
      {!audioOnly&&<Camera localStream={localStream} />}
      <Mic localStream={localStream} />
      {!audioOnly&&<ScreenShare props={props} />}
      <CloseRoom />
    </MainContainer>
  );
}

const mapStatesToProps = ({ room }) => {
  return room;
};
const mapActionToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};
export default connect(
  mapStatesToProps,
  mapActionToProps
)(RoomButtonsContainer);
