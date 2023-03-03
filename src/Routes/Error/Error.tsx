import React from "react";
import styles from "../../styles";
import NotFoundIcon from "../../Components/Icons/NotFoundIcon/NotFoundIcon";

export default function Error() {
  return (
    <div style={styles.content_center}>
      <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
        <NotFoundIcon size={256} color="#a44141" />
        <p style={styles.text}>Could not find the requested page</p>
      </div>
    </div>
  );
}
