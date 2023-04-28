import spinnerActions from "../actions/spinnerAction";

const initState = {
  isLoading: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case spinnerActions.SET_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return { ...state };
  }
};

export default reducer;
