import { authActions } from "../actions/authAction";
const localAuthData = localStorage.getItem("user");
const initState = {
  userDetail: localAuthData ? JSON.parse(localAuthData) : null,
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case authActions.SET_USER_DETAIL:
      return { ...state, userDetail: action.userDetail };

    default:
      return state;
  }
};

export default reducer;
