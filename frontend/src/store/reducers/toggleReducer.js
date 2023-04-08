import toggleActions from "../actions/toggleAction";
const initState = {
  friendSideBarToggle: window.innerWidth < 913 ? true : false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case toggleActions.SET_FRIEND_SIDE_BAR_TOGGLE:
      return {
        ...state,
        friendSideBarToggle: action.toggle,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
