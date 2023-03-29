export const groupActions = {
  SET_GROUPS: "GROUP.SET_GROUPS",
  SET_GROUP_MEMBERS_MODAL_ISOPEN: "GROUP.SET_GROUP_MEMBERS_MODAL_ISOPEN",
};

const getActions = (dispatch) => {
  return {
    setGroupMembersModalIsOpen: (isOpen) => {
      dispatch(setGroupMembersModalIsOpen(isOpen));
    },
  };
};

const setGroupMembersModalIsOpen = (isOpen) => {
  return {
    type: groupActions.SET_GROUP_MEMBERS_MODAL_ISOPEN,
    groupMembersModalIsOpen: isOpen,
  };
};
export const setGroups = (groups) => {
  return {
    type: groupActions.SET_GROUPS,
    groups,
  };
};


export default getActions