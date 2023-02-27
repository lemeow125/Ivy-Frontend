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

export interface state {
  logged_in: {
    value: boolean;
  };
}
export default function Sidebar() {
  const navigate = useNavigate();
  const logged_in = useSelector((state: state) => state.logged_in.value);
  if (!logged_in) {
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
              <HomeIcon size={4} color="white" />
            </SidebarButton>
            <SidebarButton
              onClick={() => navigate("/Products")}
              name="Products"
            >
              <ProductsIcon size={4} color="white" />
            </SidebarButton>

            <SidebarButton
              onClick={() => navigate("/Inventory")}
              name="Inventory"
            >
              <InventoryIcon size={4} color="white" />
            </SidebarButton>
          </div>
        </div>
      </div>
    );
  } else {
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
              <HomeIcon size={4} color="white" />
            </SidebarButton>
            <SidebarButton
              onClick={() => navigate("/Products")}
              name="Products"
            >
              <ProductsIcon size={4} color="white" />
            </SidebarButton>
            <SidebarButton
              onClick={() => navigate("/Inventory")}
              name="Inventory"
            >
              <InventoryIcon size={4} color="white" />
            </SidebarButton>
            <SidebarButton onClick={() => navigate("/Logs")} name="Logs">
              <LogsIcon size={4} color="white" />
            </SidebarButton>
            <Logout>
              <LogoutIcon size={4} color="white" />
            </Logout>
          </div>
        </div>
      </div>
    );
  }
}
