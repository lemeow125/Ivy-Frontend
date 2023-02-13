import React from "react";
import AppLogo from "./components/Icons/AppLogo/AppLogo";
import styles from "./styles";

export default function App() {
  return (
    <div style={styles.background}>
      <div style={styles.flex_row}>
        <AppLogo size={64} color="#6f9b78" />
        <p>Ivy - Inventory Manager</p>
      </div>
      <p>Welcome!</p>
    </div>
  );
}
