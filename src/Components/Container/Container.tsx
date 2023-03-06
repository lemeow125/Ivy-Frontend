import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import styles from "../../styles";
import { CheckSavedSession, UserInfo } from "../Api/Api";
import { toggle_login } from "../../Features/Redux/Slices/Login/LoginSlice";
import { SetUser } from "../../Features/Redux/Slices/LoggedInUserSlice/LoggedInUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { LoginState } from "../../Interfaces/Interfaces";

export interface props {
  children: React.ReactNode;
}

export default function Container(props: props) {
  const dispatch = useDispatch();
  const logged_in = useSelector((state: LoginState) => state.logged_in.value);
  // Function to check for previous login session
  async function CheckPreviousSession() {
    if (await CheckSavedSession()) {
      if (logged_in !== true) {
        await dispatch(toggle_login());
        await dispatch(SetUser(await UserInfo()));
      }
    }
  }
  useEffect(() => {
    CheckPreviousSession();
  }, []);

  return (
    <div>
      <Header />
      <div style={{ width: "15%", position: "fixed" }}>
        <Sidebar />
      </div>
      <div style={styles.route_wrapper}>
        {props.children}
        <div style={{ padding: 64 }} />
      </div>
    </div>
  );
}
