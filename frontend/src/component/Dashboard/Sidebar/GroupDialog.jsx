import * as React from "react";
import List from "@mui/material/List";
import DialogActions from "@mui/material/DialogActions";
import CustomPrimaryButton from "../../shared/component/CustomPrimaryButton";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import LabeledInput from "../../shared/component/LabeledInput";
import { Button } from "@mui/material";
import { Groups } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { connect } from "react-redux";
import { Tooltip } from "@mui/material";
import { createGroup } from "../../../realtimeCommunication/connectSocketServer";

function SimpleDialog(props) {
  const { onClose, open, friends } = props;

  const [groupName, setGroupName] = React.useState("");
  const [groupMembers, setGroupMembers] = React.useState([]);

  const handleGroupCheckbox = (e) => {
    if (e.target.checked) {
      setGroupMembers((state) => {
        return [...state, e.target.id];
      });
    } else {
      setGroupMembers((state) => {
        const newState = state.filter((el) => {
          return el !== e.target.id;
        });
        return newState;
      });
    }
  };

  const groupCreateButtonDisabled = () => {
    if (groupName === "" || !groupName.trim().length || groupMembers.length < 1)
      return true;
    else return false;
  };
  const handleClose = () => {
    onClose();
  };

  const handleCreateGroup = () => {
    const groupDetails = { name: groupName, members: groupMembers };
    createGroup(groupDetails);
    setGroupMembers([]);
    setGroupName("")
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true}>
      <LabeledInput
        additionalStyles={{
          marginLeft: 10,
          marginRight: 10,
          textAlign: "center",
        }}
        value={groupName}
        setValue={setGroupName}
        type="text"
        placeholder="Enter group name"
      />
      <DialogTitle>Add Participants</DialogTitle>
      <List sx={{ pt: 0, marginLeft: 5, overflow: "auto" }}>
        <FormGroup>
          {friends.map((friend) => (
            <FormControlLabel
              key={friend._id}
              control={<Checkbox id={friend._id} />}
              label={friend.username}
              onChange={handleGroupCheckbox}
            />
          ))}
        </FormGroup>
      </List>
      <Tooltip
        title={
          !groupCreateButtonDisabled()
            ? "Press this button to create group"
            : "Group must have a name and have atleast one member other than you"
        }
      >
        <DialogActions>
          <CustomPrimaryButton
            label="Create group"
            onClick={handleCreateGroup}
            additionalStyles={{
              margin: "15px 5px 15px 5px",
              backgroundColor: `${
                groupCreateButtonDisabled() ? "gray" : "#3BA55D"
              }`,
            }}
            disabled={groupCreateButtonDisabled()}
          />
        </DialogActions>
      </Tooltip>
    </Dialog>
  );
}

function GroupDialog({ friends }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <>
      <Button
        sx={{
          width: "48px",
          height: "48px",
          color: "white",
          borderRadius: "16px",
          minWidth: 0,
          margin: 0,
          padding: 0,
          background: "#5865F2",
          marginTop: "10px",
        }}
        onClick={handleClickOpen}
      >
        <Groups />
      </Button>
      <SimpleDialog open={open} onClose={handleClose} friends={friends} />
    </>
  );
}

const mapStatesToProps = ({ friend }) => {
  return { friends: friend.friends };
};
export default connect(mapStatesToProps)(GroupDialog);
