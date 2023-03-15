import React from "react";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import SidebarButton from "../SidebarButton/SidebarButton";
import HomeIcon from "../Icons/HomeIcon/HomeIcon";
import ProductsIcon from "../Icons/ProductsIcon/ProductsIcon";
import Logout from "../Logout/Logout";
import InventoryIcon from "../Icons/InventoryIcon/InventoryIcon";
import LogsIcon from "../Icons/LogsIcon/LogsIcon";
import LogoutIcon from "../Icons/LogoutIcon/LogoutIcon";
import TodayIcon from "../Icons/TodayIcon/TodayIcon";
import { RootState } from "../../Plugins/Redux/Store/Store";

export default function Sidebar() {
  const navigate = useNavigate();
  const logged_in = useSelector((state: RootState) => state.logged_in.value);
  function LogoutButton() {
    if (!logged_in) {
      return <div />;
    } else {
      return (
        <Logout>
          <LogoutIcon size={48} color="white" />
        </Logout>
      );
    }
  }
  return (
    <div style={styles.sidebar_container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <SidebarButton onClick={() => navigate("/")} name="Dashboard">
            <HomeIcon size={48} color="white" />
          </SidebarButton>
          <SidebarButton onClick={() => navigate("/Products")} name="Products">
            <ProductsIcon size={48} color="white" />
          </SidebarButton>
          <SidebarButton
            onClick={() => navigate("/Inventory")}
            name="Inventory"
          >
            <InventoryIcon size={48} color="white" />
          </SidebarButton>
          <SidebarButton
            onClick={() => navigate("/ActivityToday")}
            name="Summary"
          >
            <TodayIcon size={48} color="white" />
          </SidebarButton>
          <SidebarButton onClick={() => navigate("/Logs")} name="Logs">
            <LogsIcon size={48} color="white" />
          </SidebarButton>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
}
