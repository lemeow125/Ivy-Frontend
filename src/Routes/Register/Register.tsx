import * as React from "react";
import styles from "../../styles";
import { Button } from "@mui/material";
import { useState } from "react";
import { UserRegister } from "../../Components/Api/Api";
export default function Register() {
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
            value={user.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUser({ ...user, email: e.target.value });
            }}
          />
        </div>
        <div style={styles.flex_row}>
          <p style={{ ...styles.text_white, ...styles.text_L }}>Username</p>
          <div style={{ margin: 4 }} />
          <input
            style={styles.text_L}
            value={user.username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUser({ ...user, username: e.target.value });
            }}
          />
        </div>
        <div style={styles.flex_row}>
          <p style={{ ...styles.text_white, ...styles.text_L }}>Password</p>
          <div style={{ margin: 4 }} />
          <input
            style={styles.text_L}
            type="password"
            value={user.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUser({ ...user, password: e.target.value });
            }}
          />
        </div>
        <Button
          style={styles.login_button}
          variant="contained"
          onClick={async () => {
            if (await UserRegister(user)) {
              setFeedback(
                "Registration success. Please check your email address for activation"
              );
            } else {
              setFeedback("Invalid credentials specified");
            }
            setUser({
              email: "",
              username: "",
              password: "",
            });
          }}
        >
          Register
        </Button>
        <p style={{ ...styles.text_white, ...styles.text_L }}>{feedback}</p>
      </div>
    </div>
  );
}
