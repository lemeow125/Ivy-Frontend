import React from "react";
import styles from "../../styles";
import AppLogo from "../../Components/Icons/AppLogo/AppLogo";

export default function Products() {
  return (
    <div style={styles.container}>
      <AppLogo size={64} color="#6f9b78" />
      <p style={styles.text}>Ivy - Inventory Manager</p>
      <p style={styles.text}>Products Page</p>
    </div>
  );
}
