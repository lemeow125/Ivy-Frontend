import * as React from "react";
import styles from "../../styles";
import LoginIcon from "../../Components/Icons/LoginIcon/LoginIcon";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserRegister } from "../../Components/Api/Api";
export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [feedback, setFeedback] = useState("");
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ ...styles.text_white, ...styles.text_XL }}>
          Create an Account
        </p>
        <div style={styles.flex_row}>
          <p style={{ ...styles.text_white, ...styles.text_L }}>Email</p>
          <div style={{ margin: 4 }} />
          <input
            style={styles.text_L}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUser({ ...user, email: e.target.value });
            }}
            maxLength={20}
          />
        </div>
        <div style={styles.flex_row}>
          <p style={{ ...styles.text_white, ...styles.text_L }}>Username</p>
          <div style={{ margin: 4 }} />
          <input
            style={styles.text_L}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUser({ ...user, username: e.target.value });
            }}
            maxLength={20}
          />
        </div>
        <div style={styles.flex_row}>
          <p style={{ ...styles.text_white, ...styles.text_L }}>Password</p>
          <div style={{ margin: 4 }} />
          <input
            style={styles.text_L}
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUser({ ...user, password: e.target.value });
            }}
            maxLength={20}
          />
        </div>
        <Button
          style={styles.login_button}
          variant="contained"
          onClick={async () => {
            setUser({
              ...user,
            });
            if (await UserRegister(user)) {
              setFeedback(
                "Registration success. Please check your email address for activation"
              );
            } else {
              setFeedback("Invalid credentials specified");
            }
          }}
        >
          Register
        </Button>
        <p style={{ ...styles.text_white, ...styles.text_L }}>{feedback}</p>
      </div>
    </div>
  );
}
