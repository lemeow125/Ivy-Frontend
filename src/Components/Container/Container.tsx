import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import styles from "../../styles";
import { CheckSavedSession, UserInfo } from "../Api/Api";
import { toggle_login } from "../../Features/Redux/Slices/Login/LoginSlice";
import { SetUser } from "../../Features/Redux/Slices/LoggedInUserSlice/LoggedInUserSlice";
import { useDispatch } from "react-redux";

export interface props {
  children: React.ReactNode;
}

export default function Container(props: props) {
  const dispatch = useDispatch();
  // Function to check for previous login session
  async function CheckPreviousSession() {
    if (await CheckSavedSession()) {
      await dispatch(toggle_login());
      await dispatch(SetUser(await UserInfo()));
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
