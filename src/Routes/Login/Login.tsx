import * as React from "react";
import styles from "../../styles";
import LoginIcon from "../../Components/Icons/LoginIcon/LoginIcon";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { LoginState } from "../../Interfaces/Interfaces";
import { useSelector } from "react-redux";

import { UserInfo, UserLogin } from "../../Components/Api/Api";
import { toggle_login } from "../../Features/Redux/Slices/Login/LoginSlice";
import { SetUser } from "../../Features/Redux/Slices/LoggedInUserSlice/LoggedInUserSlice";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const logged_in = useSelector((state: LoginState) => state.logged_in.value);
  if (logged_in) {
    return <Navigate to="/" replace />;
  }
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={styles.flex_row}>
          <LoginIcon size={64} color="white" />
          <p style={{ ...styles.text_white, ...styles.text_XL }}>
            Login to Ivy
          </p>
        </div>
        <div style={styles.flex_row}>
          <p style={{ ...styles.text_white, ...styles.text_M }}>Username</p>
          <div style={{ margin: 4 }} />
          <input
            style={styles.input_notetitle}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUser({ ...user, username: e.target.value });
            }}
            maxLength={20}
          />
        </div>
        <div style={styles.flex_row}>
          <p style={{ ...styles.text_white, ...styles.text_M }}>Password</p>
          <div style={{ margin: 4 }} />
          <input
            style={styles.input_notetitle}
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUser({ ...user, password: e.target.value });
            }}
            maxLength={20}
          />
        </div>
        <Button
          style={{
            ...styles.button_baseline,
            ...{ backgroundColor: "#80b38b" },
          }}
          variant="contained"
          onClick={async () => {
            setUser({
              username: "",
              password: "",
            });
            if (await UserLogin(user)) {
              await dispatch(toggle_login());
              await dispatch(SetUser(await UserInfo()));
              navigate("/");
            } else {
              setError("Invalid Login");
            }
          }}
        >
          Login
        </Button>
        <Button
          style={{
            ...styles.button_baseline,
            ...{ backgroundColor: "#80b38b" },
          }}
          variant="contained"
          onClick={() => {
            navigate("/Register");
          }}
        >
          Register
        </Button>
        <p style={{ ...styles.text_red, ...styles.text_M }}>{error}</p>
      </div>
    </div>
  );
}
