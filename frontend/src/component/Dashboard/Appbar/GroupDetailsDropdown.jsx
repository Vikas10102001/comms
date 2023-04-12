import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { connect } from "react-redux";
import getActions from "../../../store/actions/groupAction";
import {
  deleteGroup,
  leaveGroup,
} from "../../../realtimeCommunication/connectSocketServer";
import {
  setChosenChatDetails,
  setCurrentConversation,
} from "../../../store/actions/chatAction";
import store from "../../../store/store";
import GroupMembersModal from "../FriendSidebar/Groups/GroupMembersModal";

function GroupDetailsDropdown({
  setGroupMembersModalIsOpen,
  chosenChatDetails,
  userDetail,
  groupMembersModalIsOpen,
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
  const handleLeaveGroup = () => {
    leaveGroup({ groupId: chosenChatDetails.groupId, userId: userDetail.id });
    store.dispatch(setChosenChatDetails(null));
    store.dispatch(setCurrentConversation(null));
  };
  const handleDeleteGroup = () => {
    deleteGroup({ groupId: chosenChatDetails.groupId });
  };
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
          <MenuItem onClick={handleDeleteGroup}>Delete Group</MenuItem>
        ) : (
          <MenuItem onClick={handleLeaveGroup}>Leave Group</MenuItem>
        )}
      </Menu>
      {groupMembersModalIsOpen && <GroupMembersModal />}
    </div>
  );
}

const mapStatesToProps = ({ chat, auth, group }) => {
  return { ...chat, ...auth, ...group };
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
