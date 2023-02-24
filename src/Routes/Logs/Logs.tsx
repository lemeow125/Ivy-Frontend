import * as React from "react";
import LogsIcon from "../../Components/Icons/LogsIcon/LogsIcon";
import styles from "../../styles";

export default function Logs() {
  return (
    <div style={{ margin: 32, height: "100%" }}>
      <div style={styles.flex_row}>
        <LogsIcon size={8} color="white" />
        <h1 style={styles.text_large}>Logs</h1>
      </div>
    </div>
  );
}
