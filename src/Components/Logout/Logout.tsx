import React from "react";
import { useDispatch } from "react-redux";
import { toggle_login } from "../../Features/Redux/Slices/Login/LoginSlice";
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
    await dispatch(toggle_login());
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <div>
      <Button
        onClick={logout}
        value="Log out"
        variant="contained"
        style={styles.sidebar_button}
      >
        {props.children}
        <p style={{ ...styles.text_white, ...styles.text_S }}>Log Out</p>
      </Button>
    </div>
  );
}
