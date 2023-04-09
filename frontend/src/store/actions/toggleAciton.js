const toggleActions = {
  SET_FRIEND_SIDE_BAR_TOGGLE: "TOGGLE.SET_FRIEND_SIDE_BAR_TOGGLE",
};

export const setFriendSideBarToggle = (toggle) => {
  return {
    type: toggleActions.SET_FRIEND_SIDE_BAR_TOGGLE,
    toggle,
  };
};

export default toggleActions;
