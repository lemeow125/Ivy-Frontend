import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../../Features/Login/LoginSlice";
import { Button } from "@mui/material";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";

export interface state {
  logged_in: {
    value: boolean;
  };
}
export interface props {
  children: React.ReactNode;
}

export default function Logout(props: props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function logout() {
    await dispatch(toggle());
    navigate("/");
  }

  return (
    <div style={{ paddingTop: "40vh" }}>
      <Button
        onClick={logout}
        value="Log out"
        variant="contained"
        style={styles.logout_button}
      >
        {props.children}
        <p style={styles.text}>Log Out</p>
      </Button>
    </div>
  );
}
