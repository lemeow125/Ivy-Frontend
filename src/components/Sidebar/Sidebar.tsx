import React from "react";
import styles from "../../styles";
import SidebarButton from "../SidebarButton/SidebarButton";
import { useNavigate } from "react-router-dom";
import Logout from "../Logout/Logout";
export interface state {
  minimized: {
    value: boolean;
    sidebar_width: string;
    page_width: string;
  };
}
export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div style={styles.sidebar_wrapper}>
      <SidebarButton onClick={() => navigate("/")} name="Dashboard" />
      <SidebarButton onClick={() => navigate("/Products")} name="Products" />
      <SidebarButton onClick={() => navigate("/Inventory")} name="Inventory" />
      <SidebarButton onClick={() => navigate("/Logs")} name="Logs" />
      <Logout />
    </div>
  );
}
