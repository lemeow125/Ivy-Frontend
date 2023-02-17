import React from "react";
import TotalProductsIcon from "../../Components/Icons/TotalProductsIcon/TotalProductsIcon";
import DashboardContainer from "../../Components/DashboardContainer/DashboardContainer";
import StatsIcon from "../../Components/Icons/StatsIcon/StatsIcon";
import "../../index.css";
import styles from "../../styles";
import HomeIcon from "../../Components/Icons/HomeIcon/HomeIcon";
import ColoredCube from "../../Components/ColoredCube/ColoredCube";

export default function Dashboard() {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper_row}>
        <HomeIcon size={64} color="white" />
        <h1 style={styles.text_large}>Dashboard</h1>
      </div>
      <DashboardContainer width="70%" height="30%">
        <div style={styles.wrapper_row}>
          <TotalProductsIcon size={64} color="white" />
          <h1 style={styles.text_dashboard_2}>Total Products</h1>
        </div>
        <h1 style={styles.text_dashboard_1}>2546 Unique Items</h1>
        <h1 style={styles.text_dashboard_1}>In inventory</h1>
      </DashboardContainer>
      <div style={{ padding: 16 }} />
      <DashboardContainer width="50%" height="40%">
        <div style={styles.wrapper_row}>
          <StatsIcon size={64} color="white" />
          <h1 style={styles.text_dashboard_1}>Current Session</h1>
        </div>
        <div style={styles.wrapper_row}>
          <ColoredCube size={32} color="#a48e41" />
          <h1 style={styles.text_medium}>Added</h1>
        </div>
        <h1 style={styles.text_dashboard_1}>254</h1>
        <div style={styles.wrapper_row}>
          <ColoredCube size={32} color="#a44141" />
          <h1 style={styles.text_medium}>Removed</h1>
        </div>
        <h1 style={styles.text_dashboard_1}>64</h1>
      </DashboardContainer>
    </div>
  );
}
