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
      <div style={styles.DashboardWidget_WrapperRow}>
        <div style={{ flex: 8 }}>
          <div style={styles.DashboardWidget_WrapperColumn}>
            <div style={{ display: "flex", flex: 5, flexDirection: "row" }}>
              <div style={{ flex: 7 }}>
                <DashboardContainer>
                  <div style={styles.wrapper_row}>
                    <TotalProductsIcon size={64} color="white" />
                    <h1 style={styles.text_extra_large}>Total Products</h1>
                  </div>
                  <h1 style={styles.text_large}>2546 Unique Items</h1>
                  <h1 style={styles.text_large}>In inventory</h1>
                </DashboardContainer>
              </div>
              <div style={{ flex: 3 }}>
                <DashboardContainer>
                  <div style={styles.wrapper_row}>
                    <TotalProductsIcon size={64} color="white" />
                    <h1 style={styles.text_large}>Widget 2</h1>
                  </div>
                  <h1 style={styles.text_medium}>Placeholder</h1>
                </DashboardContainer>
              </div>
            </div>
            <div style={{ display: "flex", flex: 5, flexDirection: "row" }}>
              <div style={{ flex: 7 }}>
                <DashboardContainer>
                  <div style={styles.wrapper_row}>
                    <StatsIcon size={64} color="white" />
                    <h1 style={styles.text_large}>Current Session</h1>
                  </div>
                  <div style={styles.wrapper_row}>
                    <ColoredCube size={32} color="#a48e41" />
                    <h1 style={styles.text_large}>Added</h1>
                  </div>
                  <h1 style={styles.text_medium}>254</h1>
                  <div style={styles.wrapper_row}>
                    <ColoredCube size={32} color="#a44141" />
                    <h1 style={styles.text_large}>Removed</h1>
                  </div>
                  <h1 style={styles.text_medium}>64</h1>
                </DashboardContainer>
              </div>
              <div style={{ flex: 3 }}>
                <DashboardContainer>
                  <div style={styles.wrapper_row}>
                    <TotalProductsIcon size={64} color="white" />
                    <h1 style={styles.text_large}>Widget 4</h1>
                  </div>
                  <h1 style={styles.text_medium}>Placeholder</h1>
                </DashboardContainer>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 2 }}>
          <DashboardContainer>
            <div style={styles.wrapper_row}>
              <TotalProductsIcon size={64} color="white" />
              <h1 style={styles.text_large}>Widget 5</h1>
            </div>
            <h1 style={styles.text_medium}>Placeholder</h1>
          </DashboardContainer>
        </div>
      </div>
    </div>
  );
}
