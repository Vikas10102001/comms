import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { logout } from "../../shared/utils/auth";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/roomAction";
import { getLocalStream } from "../../../realtimeCommunication/webRTCHandler";
import store from "../../../store/store";

function PositionedMenu({
  setAudioOnly,
  audioOnly,
  hasUserJoined,
  localStream,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let unsubscribe;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAudioOnly = () => {
    setAudioOnly(!audioOnly);

    unsubscribe = store.subscribe(() => {
      const latestAudioOnly = store.getState().room.audioOnly;

      if (hasUserJoined) {
        getLocalStream(latestAudioOnly, callBack);
      }
    });
  };
  const callBack = () => {
    unsubscribe();
  };
  return (
    <div>
      <IconButton onClick={handleClick} style={{ color: "white" }}>
        <MoreVert />
      </IconButton>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={logout}>Logout</MenuItem>
        <MenuItem onClick={handleAudioOnly}>
          {audioOnly ? "Audio only enabled" : "Audio only disabled"}
        </MenuItem>
      </Menu>
    </div>
  );
}

const mapActionToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};

const mapStatesToProps = ({ room }) => {
  return room;
};

export default connect(mapStatesToProps, mapActionToProps)(PositionedMenu);
