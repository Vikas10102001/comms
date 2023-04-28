const spinnerActions = {
  SET_IS_LOADING: "SPINNER.SET_IS_LOADING",
};

export const setIsLoading = (isLoading) => {
  return {
    type: spinnerActions.SET_IS_LOADING,
    isLoading,
  };
};

export default spinnerActions;
