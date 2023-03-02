import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import styles from "../../styles";

export interface props {
  children: React.ReactNode;
}

export default function Container(props: props) {
  return (
    <div>
      <Header />
      <div style={{ width: "15%", position: "fixed" }}>
        <Sidebar />
      </div>
      <div style={styles.route_wrapper}>{props.children}</div>
    </div>
  );
}
