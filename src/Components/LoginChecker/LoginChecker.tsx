import * as React from "react";
import { Navigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { LoginState, OldSessionState } from "../../Interfaces/Interfaces";

export interface props {}

export default function LoginChecker() {
  const logged_in = useSelector((state: LoginState) => state.logged_in.value);
  const old_session_checked = useSelector(
    (state: OldSessionState) => state.old_session_checked.value
  );
  if (!logged_in && !old_session_checked) {
  } else if (!logged_in && old_session_checked) {
    console.log("Not logged in. Redirecting to login page");
    return <Navigate to="/Login" replace />;
  }
  return <div />;
}
