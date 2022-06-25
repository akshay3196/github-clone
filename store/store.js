import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userInfoSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
