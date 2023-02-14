import React from "react";
import AppLogo from "../../components/Icons/AppLogo/AppLogo";
import "../../index.css";
import styles from "../../styles";

export default function Dashboard() {
  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <AppLogo size={64} color="#6f9b78" />
        <p style={styles.text}>Ivy - Inventory Manager</p>
        <p style={styles.text}>Welcome to the Dashboard</p>
      </div>
    </div>
  );
}
