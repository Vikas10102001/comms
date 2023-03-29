import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { logout } from "../../shared/utils/auth";
import { connect } from "react-redux";
import { getActions } from "../../../store/actions/roomAction";

function PositionedMenu({ setAudioOnly, audioOnly, hasUserJoined }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleAudioOnly = () => {
    setAudioOnly(!audioOnly);
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
        {!hasUserJoined && (
          <MenuItem onClick={handleAudioOnly}>
            {audioOnly ? "Audio only enabled" : "Audio only disabled"}
          </MenuItem>
        )}
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
