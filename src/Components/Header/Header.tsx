import React from "react";
import AppLogo from "../Icons/AppLogo/AppLogo";
import Login from "../Login/Login";
import styles from "../../styles";

export default function Header() {
  return (
    <div style={styles.header_wrapper}>
      <div style={styles.header_left}>
        <AppLogo size={64} color="#80b38b" />
        <p style={styles.logo_title}>Ivy</p>
      </div>
      <div style={styles.header_right}>
        <Login />
      </div>
    </div>
  );
}
