import React from "react";
import AppLogo from "../../Components/Icons/AppLogo/AppLogo";
import styles from "../../styles";
import NotFoundIcon from "../../Components/Icons/NotFoundIcon/NotFoundIcon";

export default function Error() {
  return (
    <div style={styles.container}>
      <NotFoundIcon size={64} color="#a44141" />
      <p style={styles.text}>Could not find the requested page</p>
    </div>
  );
}
