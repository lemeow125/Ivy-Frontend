import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../Features/Login/LoginSlice";
import { Button } from "@mui/material";
import styles from "../../styles";

export interface state {
  logged_in: {
    value: boolean;
  };
}
export default function Login() {
  const logged_in = useSelector((state: state) => state.logged_in.value);
  const [status, setStatus] = useState("Not logged in");
  const dispatch = useDispatch();

  async function login() {
    await dispatch(toggle());
    if (logged_in) {
      setStatus("Logged in");
    } else {
      setStatus("Not logged in");
    }
    await console.log("test " + logged_in);
  }

  if (logged_in) {
    return <p style={styles.text}>Welcome Jophiel</p>;
  } else {
    return (
      <div>
        <Button
          onClick={login}
          value="Login"
          variant="contained"
          style={{
            backgroundColor: "#9e8500",
            width: 128,
            height: 32,
            border: "none",
            padding: 8,
            borderRadius: 16,
          }}
        >
          <p style={styles.text}>Login</p>
        </Button>
      </div>
    );
  }
}
