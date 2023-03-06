import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckSavedSession, UserInfo } from "../Api/Api";
import { toggle_login } from "../../Features/Redux/Slices/Login/LoginSlice";
import { SetUser } from "../../Features/Redux/Slices/LoggedInUserSlice/LoggedInUserSlice";
import { LoginState } from "../../Interfaces/Interfaces";
export default function PreviousSessionChecker() {
  const dispatch = useDispatch();
  const logged_in = useSelector((state: LoginState) => state.logged_in.value);
  // Function to check for previous login session
  useEffect(() => {
    async function check() {
      if (await UserInfo()) {
        if (logged_in !== true) {
          console.log("Previous session found. Restoring");
          await dispatch(toggle_login());
          await dispatch(SetUser(await UserInfo()));
        }
      } else {
        console.log("No old session found");
        localStorage.removeItem("token");
      }
    }
    check();
  }, []);
  return <div />;
}
