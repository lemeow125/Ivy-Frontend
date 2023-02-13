import React from "react";
import logo from "./img/ivy.svg";
import styles from "./styles";

export default function App() {
  return (
    <div style={styles.background}>
      <body style={styles.background}>
        <img src={logo} alt="logo" />
        <p>Ivy - Inventory Manager</p>
      </body>
    </div>
  );
}
