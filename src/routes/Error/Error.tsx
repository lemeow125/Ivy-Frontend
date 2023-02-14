import React from "react";
import AppLogo from "../../Components/Icons/AppLogo/AppLogo";
import styles from "../../styles";

export default function Error() {
  return (
    <div style={styles.container}>
      <AppLogo size={64} color="#6f9b78" />
      <p style={styles.text}>Ivy - Inventory Manager</p>
      <p style={styles.text}>Error 404: Page Not Found</p>
    </div>
  );
}
