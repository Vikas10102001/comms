import * as api from "../../api";
import { openAlert } from "./alertAction";
import { setIsLoading } from "./spinnerAction";
export const authActions = {
  SET_USER_DETAIL: "AUTH.SET_USER_DETAIL",
};

const setUserDetail = (userDetail) => {
  return {
    type: authActions.SET_USER_DETAIL,
    userDetail,
  };
};
export const getActions = (dispatch) => {
  return {
    login: (userDetail, navigate) => dispatch(login(userDetail, navigate)),
    register: (userDetail, navigate) =>
      dispatch(register(userDetail, navigate)),
  };
};

const login = (userDetail, navigate) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    const response = await api.login(userDetail);
    dispatch(setIsLoading(false));
    if (response.error) {
      console.log(response.error);
      const error = response.er?.response?.data.error
        ? response.er?.response?.data.error
        : "Something went wrong";
      dispatch(openAlert(error));
    } else {
      const userDetail = {
        id: response.data.data._id,
        username: response.data.data.username,
        email: response.data.data.email,
        token: response.data.token,
      };
      localStorage.setItem("user", JSON.stringify(userDetail));
      dispatch(setUserDetail(userDetail));
      navigate("/dashboard");
    }
  };
};
const register = (userDetail, navigate) => {
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    const response = await api.register(userDetail);
    dispatch(setIsLoading(false));
    if (response.error) {
      const error = response.er?.response?.data.error
        ? response.er?.response?.data.error
        : "Something went wrong";
      dispatch(openAlert(error));
    } else {
      const userDetail = {
        id: response.data.data._id,
        username: response.data.data.username,
        email: response.data.data.email,
        token: response.data.token,
      };
      localStorage.setItem("user", JSON.stringify(userDetail));
      dispatch(setUserDetail(userDetail));
      navigate("/dashboard");
    }
  };
};
