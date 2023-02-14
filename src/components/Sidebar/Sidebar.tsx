import React from "react";
import styles from "../../styles";
import SidebarButton from "../SidebarButton/SidebarButton";
export interface state {
  minimized: {
    value: boolean;
    sidebar_width: string;
    page_width: string;
  };
}
export default function Sidebar() {
  return (
    <div style={styles.sidebar_wrapper}>
      <SidebarButton onClick={() => console.log("WIP!")} name="Dashboard" />
      <SidebarButton onClick={() => console.log("WIP!")} name="Products" />
      <SidebarButton onClick={() => console.log("WIP!")} name="Inventory" />
      <SidebarButton onClick={() => console.log("WIP!")} name="Logs" />
    </div>
  );
}
