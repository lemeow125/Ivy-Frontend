import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import styles from "../../styles";

export interface props {
  children: React.ReactNode;
}

export default function Container(props: props) {
  return (
    <div>
      <div>
        <div style={{ width: "15%", position: "fixed" }}>
          <Sidebar />
        </div>
        <div style={styles.route_wrapper}>{props.children}</div>
      </div>
    </div>
  );
}
