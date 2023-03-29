import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { connect } from "react-redux";
import getActions from "../../../store/actions/groupAction";

function GroupDetailsDropdown({
  setGroupMembersModalIsOpen,
  chosenChatDetails,
  userDetail,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleGroupMember = () => {
    setGroupMembersModalIsOpen(true);
    setAnchorEl(null);
  };
  const handleLeaveGroup = () => {};
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Group info
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleGroupMember}>Group members</MenuItem>
        {chosenChatDetails.admin._id === userDetail.id ? (
          <MenuItem onClick={handleLeaveGroup}>Delete Group</MenuItem>
        ) : (
          <MenuItem onClick={handleLeaveGroup}>Leave Group</MenuItem>
        )}
      </Menu>
    </div>
  );
}

const mapStatesToProps = ({ chat ,auth}) => {
  return {...chat,...auth};
};
const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};
export default connect(
  mapStatesToProps,
  mapActionsToProps
)(GroupDetailsDropdown);
