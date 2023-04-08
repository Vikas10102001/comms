import { Close, Dehaze } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriendSideBarToggle } from "../../../store/actions/toggleAction";

export default function FriendSideBarToggleButton() {
  const toggle = useSelector((state) => {
    return state.toggle.friendSideBarToggle;
  });
  const dispatch = useDispatch();
  const handleToggle = () => {
    dispatch(setFriendSideBarToggle(!toggle));
  };
  return (
    <Button sx={{ marginTop: "10px" }} onClick={handleToggle}>
      {toggle ? <Close /> : <Dehaze />}
    </Button>
  );
}
