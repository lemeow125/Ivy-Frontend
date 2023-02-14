import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../../../Features/Login/LoginSlice";

export default configureStore({
  reducer: {
    logged_in: LoginReducer,
  },
});
