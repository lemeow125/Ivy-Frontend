import React, { useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import styles from "../../styles";
import { CheckSavedSession, UserInfo } from "../Api/Api";
import { toggle_login } from "../../Features/Redux/Slices/Login/LoginSlice";
import { SetUser } from "../../Features/Redux/Slices/LoggedInUserSlice/LoggedInUserSlice";
import { useDispatch, useSelector } from "react-redux";
import { LoginState } from "../../Interfaces/Interfaces";
import { useNavigate } from "react-router-dom";
import PreviousSessionChecker from "../PreviousSessionChecker/PreviousSessionChecker";

export interface props {
  children: React.ReactNode;
}

export default function Container(props: props) {
  return (
    <div>
      <PreviousSessionChecker />
      <Header />
      <div style={{ width: "15%", position: "fixed" }}>
        <Sidebar />
      </div>
      <div style={styles.route_wrapper}>
        <div
          style={{
            paddingTop: 16,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          {props.children}
        </div>
        <div style={{ padding: 64 }} />
      </div>
    </div>
  );
}
