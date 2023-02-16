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
export default function Logout() {
  const logged_in = useSelector((state: state) => state.logged_in.value);
  const dispatch = useDispatch();

  async function login() {
    await dispatch(toggle());
    await console.log("test " + logged_in);
  }

  if (!logged_in) {
    return <div></div>;
  } else {
    return (
      <div style={{ paddingTop: 384 }}>
        <Button
          onClick={login}
          value="Log out"
          variant="contained"
          style={styles.logout_button}
        >
          <p style={styles.text}>Log Out</p>
        </Button>
      </div>
    );
  }
}
