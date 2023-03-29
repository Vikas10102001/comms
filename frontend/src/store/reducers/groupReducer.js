import {groupActions} from "../actions/groupAction";

const initState = {
  groups: [],
  groupMembersModalIsOpen:false
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case groupActions.SET_GROUPS:
      return {
        ...state,
        groups: action.groups,
      };
      case groupActions.SET_GROUP_MEMBERS_MODAL_ISOPEN:
        return{
          ...state,
          groupMembersModalIsOpen:action.groupMembersModalIsOpen
        }
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
