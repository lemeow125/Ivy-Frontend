import React from "react";
import styles from "../../styles";
import SidebarButton from "../SidebarButton/SidebarButton";
import HomeIcon from "../Icons/HomeIcon/HomeIcon";
import ProductsIcon from "../Icons/ProductsIcon/ProductsIcon";
import { useNavigate } from "react-router-dom";
import Logout from "../Logout/Logout";
import InventoryIcon from "../Icons/InventoryIcon/InventoryIcon";
import LogsIcon from "../Icons/LogsIcon/LogsIcon";
import LogoutIcon from "../Icons/LogoutIcon/LogoutIcon";
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
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SidebarButton onClick={() => navigate("/")} name="Dashboard">
          <HomeIcon size={48} color="white" />
        </SidebarButton>
        <SidebarButton onClick={() => navigate("/Products")} name="Products">
          <ProductsIcon size={48} color="white" />
        </SidebarButton>
        <SidebarButton onClick={() => navigate("/Inventory")} name="Inventory">
          <InventoryIcon size={48} color="white" />
        </SidebarButton>
        <SidebarButton onClick={() => navigate("/Logs")} name="Logs">
          <LogsIcon size={48} color="white" />
        </SidebarButton>
      </div>

      <Logout>
        <LogoutIcon size={48} color="white" />
      </Logout>
    </div>
  );
}
