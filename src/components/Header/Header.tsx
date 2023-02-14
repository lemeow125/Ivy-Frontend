import React from "react";
import AppLogo from "../Icons/AppLogo/AppLogo";
import styles from "../../styles";

export default function Header() {
  return (
    <div style={styles.header_container}>
      <div style={styles.header_left}>
        <AppLogo size={64} color="#6f9b78" />
        <p style={styles.logo_title}>Ivy</p>
      </div>
      <div style={styles.header_right}></div>
    </div>
  );
}
