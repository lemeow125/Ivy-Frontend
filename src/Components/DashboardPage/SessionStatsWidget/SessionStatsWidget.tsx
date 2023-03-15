import * as React from "react";
import styles from "../../../styles";
import ColoredCube from "../../ColoredCube/ColoredCube";
import StatsIcon from "../../Icons/StatsIcon/StatsIcon";
import { useSelector } from "react-redux";
import { RootState } from "../../../Plugins/Redux/Store/Store";

export interface props {}

export default function SessionStatsWidget() {
  const session_added = useSelector(
    (state: RootState) => state.session_transactions.added
  );
  const session_removed = useSelector(
    (state: RootState) => state.session_transactions.removed
  );
  return (
    <div
      style={{
        ...styles.widget,
        ...{ flex: 5 },
      }}
    >
      <div style={styles.content_row}>
        <StatsIcon size={64} color="white" />
        <p style={{ ...styles.text_white, ...styles.text_XL }}>
          Current Session
        </p>
      </div>
      <div style={styles.content_row}>
        <ColoredCube size={32} color="#a48e41" />
        <p style={{ ...styles.text_white, ...styles.text_L }}>Added</p>
      </div>
      <p style={{ ...styles.text_white, ...styles.text_L }}>{session_added}</p>
      <div style={styles.content_row}>
        <ColoredCube size={32} color="#a44141" />
        <p style={{ ...styles.text_white, ...styles.text_L }}>Removed</p>
      </div>
      <p style={{ ...styles.text_white, ...styles.text_XL }}>
        {session_removed}
      </p>
    </div>
  );
}
