import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../../../Features/Redux/Slices/Login/LoginSlice";
import LoggedInUserReducer from "../../../Features/Redux/Slices/LoggedInUserSlice/LoggedInUserSlice";

export default configureStore({
  reducer: {
    logged_in: LoginReducer,
    logged_in_user: LoggedInUserReducer,
  },
});
