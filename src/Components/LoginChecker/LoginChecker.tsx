import * as React from "react";
import { Navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { LoginState } from "../../Interfaces/Interfaces";

export interface props {}

export default function LoginChecker() {
  const logged_in = useSelector((state: LoginState) => state.logged_in.value);
  if (!logged_in) {
    console.log("Not logged in. Redirecting to login page");
    return <Navigate to="/Login" replace />;
  }
  return <div />;
}
