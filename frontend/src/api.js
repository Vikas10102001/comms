import axios from "axios";
import { logout } from "./component/shared/utils/auth";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  timeout: 10000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetail = localStorage.getItem("user");
    if (userDetail) {
      const token = JSON.parse(userDetail).token;
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (er) => {
    return Promise.reject(er);
  }
);
const sendApiRequest = async (route,data = null) => {
  try {
    return await apiClient.post(route, data);
  } catch (er) {
    checkResponseCode(er);
    return {
      error: true,
      er,
    };
  }
};
export const login = async (data) => {
  return await sendApiRequest("/users/login",data);
};

export const register = async (data) => {
  return await sendApiRequest("/users/register",data);
};

export const sendInvitation = async (data) => {
  return await sendApiRequest("/friend-invitations/invite",data);
};

export const acceptInvitation = async (data) => {
  return await sendApiRequest("/friend-invitations/accept",data);
};
export const rejectInvitation = async (data) => {
  return await sendApiRequest("/friend-invitations/reject",data);
};

const checkResponseCode = (er) => {
  const responseCode = er?.response?.status;
  if (responseCode) {
    (responseCode === 401 || responseCode === 403) && logout();
  }
};
