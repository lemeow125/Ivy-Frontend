import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../../../Features/Redux/Slices/Login/LoginSlice";
import LoggedInUserReducer from "../../../Features/Redux/Slices/LoggedInUserSlice/LoggedInUserSlice";
import OldSessionReducer from "../../../Features/Redux/Slices/OldSession/OldSessionSlice";

export default configureStore({
  reducer: {
    logged_in: LoginReducer,
    logged_in_user: LoggedInUserReducer,
    old_session_checked: OldSessionReducer,
  },
});
