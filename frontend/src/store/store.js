import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import alertReducer from "./reducers/alertReducer";
import friendReducer from "./reducers/friendsReducer";
import chatReducer from "./reducers/chatReducer";
import roomReducer from "./reducers/roomReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  alert: alertReducer,
  friend: friendReducer,
  chat: chatReducer,
  room: roomReducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
