import React from "react";
import { connect } from "react-redux";
import List from "@mui/material/List";
// import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { Divider, ListItem, ListItemText } from "@mui/material";
import getActions from "../../../../store/actions/groupAction";
import CustomPrimaryButton from "../../../shared/component/CustomPrimaryButton";
import { kickUser } from "../../../../realtimeCommunication/connectSocketServer";

function GroupMembersModal({
  chosenChatDetails,
  groupMembersModalIsOpen,
  setGroupMembersModalIsOpen,
  userDetail,
}) {
  const handleOnClose = () => {
    setGroupMembersModalIsOpen(false);
  };

  const handleKickUser = (member) => {
    kickUser({ memberId: member._id, groupId: chosenChatDetails.groupId });
  };
  return (
    <Dialog
      onClose={handleOnClose}
      open={groupMembersModalIsOpen}
      fullWidth={true}
      sx={{ top: "-30%" }}
    >
      <DialogTitle sx={{ textAlign: "center" }}>Group Members</DialogTitle>
      <Divider />
      <List sx={{ pt: 0 }}>
        {chosenChatDetails.members.map((member) => (
          <>
            <ListItem key={member._id}>
              <ListItemText primary={`${member.username} (${member.email})`} />
              {chosenChatDetails.admin._id === userDetail.id &&
              !(chosenChatDetails.admin._id === member._id) ? (
                <CustomPrimaryButton
                  label="Kick"
                  additionalStyles={{
                    width: "15%",
                    height: "5%",
                    lineHeight: "1",
                  }}
                  onClick={() => {
                    handleKickUser(member);
                  }}
                />
              ) : (
                chosenChatDetails.admin._id === member._id && (
                  <ListItemText
                    primary="Admin"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                      marginRight: "20px",
                    }}
                  />
                )
              )}
            </ListItem>
            <Divider variant="middle" />
          </>
        ))}
      </List>
    </Dialog>
  );
}
const mapStatesToProps = ({ chat, group, auth }) => {
  return { ...chat, ...group, ...auth };
};
const mapActionsToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};
export default connect(mapStatesToProps, mapActionsToProps)(GroupMembersModal);
