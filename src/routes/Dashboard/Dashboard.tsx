import React from "react";
import TotalProductsIcon from "../../Components/Icons/TotalProductsIcon/TotalProductsIcon";
import DashboardContainer from "../../Components/DashboardContainer/DashboardContainer";
import LowStockIcon from "../../Components/Icons/LowStockIcon/LowStockIcon";
import StatsIcon from "../../Components/Icons/StatsIcon/StatsIcon";
import LogsIcon from "../../Components/Icons/LogsIcon/LogsIcon";
import "../../index.css";
import styles from "../../styles";
import HomeIcon from "../../Components/Icons/HomeIcon/HomeIcon";
import ColoredCube from "../../Components/ColoredCube/ColoredCube";
import RecentlyAddedIcon from "../../Components/Icons/RecentlyAddedIcon/RecentlyAddedIcon";

export default function Dashboard() {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper_row}>
        <HomeIcon size={8} color="white" />
        <h1 style={styles.text_large}>Dashboard</h1>
      </div>
      <div style={styles.DashboardWidget_WrapperRow}>
        <div style={{ flex: 8 }}>
          <div style={styles.DashboardWidget_WrapperColumn}>
            <div style={{ display: "flex", flex: 5, flexDirection: "row" }}>
              <div style={{ flex: 1 }}>
                <DashboardContainer>
                  <div style={styles.wrapper_row}>
                    <TotalProductsIcon size={8} color="white" />
                    <h1 style={styles.text_extra_large}>Total Products</h1>
                  </div>
                  <h1 style={styles.text_large}>2546 Unique Items</h1>
                  <h1 style={styles.text_large}>In inventory</h1>
                </DashboardContainer>
              </div>
            </div>
            <div style={{ display: "flex", flex: 5, flexDirection: "row" }}>
              <div style={{ flex: 7 }}>
                <DashboardContainer>
                  <div style={styles.wrapper_row}>
                    <StatsIcon size={8} color="white" />
                    <h1 style={styles.text_large}>Current Session</h1>
                  </div>
                  <div style={styles.wrapper_row}>
                    <ColoredCube size={4} color="#a48e41" />
                    <h1 style={styles.text_large}>Added</h1>
                  </div>
                  <h1 style={styles.text_medium}>254</h1>
                  <div style={styles.wrapper_row}>
                    <ColoredCube size={4} color="#a44141" />
                    <h1 style={styles.text_large}>Removed</h1>
                  </div>
                  <h1 style={styles.text_medium}>64</h1>
                </DashboardContainer>
              </div>
              <div style={{ flex: 3 }}>
                <DashboardContainer>
                  <div style={styles.wrapper_row}>
                    <LowStockIcon size={8} color="white" />
                    <h1 style={styles.text_medium}>Low Stock</h1>
                  </div>
                  <h1 style={styles.text_medium}>Canned Pagmamahal</h1>
                  <h1 style={styles.text_tiny}>In Stock: 3</h1>
                </DashboardContainer>
                <div style={{ padding: "1.5vh" }} />
                <DashboardContainer>
                  <div style={styles.wrapper_row}>
                    <RecentlyAddedIcon size={8} color="white" />
                    <h1 style={styles.text_medium}>Recently Added</h1>
                  </div>
                  <h1 style={styles.text_medium}>Zidane's Water</h1>
                  <h1 style={styles.text_tiny}>Added 02/17/2023</h1>
                </DashboardContainer>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <DashboardContainer>
            <div style={styles.wrapper_row}>
              <LogsIcon size={8} color="white" />
              <div style={styles.wrapper_column}>
                <h1 style={styles.text_medium}>Recent</h1>
                <h1 style={styles.text_medium}>Transactions</h1>
              </div>
            </div>
            <div style={{ marginBottom: "2vh" }} />
            <h1 style={styles.text}>Kopiko Blanca (Sack)</h1>
            <h1 style={styles.text_small}>Added: 96</h1>
            <h1 style={styles.text_small}>Removed: 105</h1>
            <h1 style={styles.text_tiny}>02/17/2023</h1>
            <div style={{ marginBottom: "2vh" }} />
            <h1 style={styles.text}>Zidane's Water</h1>
            <h1 style={styles.text_small}>Added: 49</h1>
            <h1 style={styles.text_small}>Removed: 24</h1>
            <h1 style={styles.text_tiny}>02/17/2023</h1>
            <div style={{ marginBottom: "2vh" }} />
            <h1 style={styles.text}>Dan's Beefed Corn</h1>
            <h1 style={styles.text_small}>Added: 32</h1>
            <h1 style={styles.text_small}>Removed: 64</h1>
            <h1 style={styles.text_tiny}>02/17/2023</h1>
            <div style={{ marginBottom: "2vh" }} />
            <div style={styles.wrapper_column}>
              <h1 style={styles.text}>Canned</h1>
              <h1 style={styles.text}>Pagmamahal</h1>
            </div>
            <h1 style={styles.text_small}>Added: 0</h1>
            <h1 style={styles.text_small}>Removed: 60</h1>
            <h1 style={styles.text_tiny}>02/17/2023</h1>
          </DashboardContainer>
        </div>
      </div>
    </div>
  );
}
