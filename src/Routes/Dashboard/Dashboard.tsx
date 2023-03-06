import React from "react";
import TotalProductsIcon from "../../Components/Icons/TotalProductsIcon/TotalProductsIcon";
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
    <div>
      <div style={styles.flex_row}>
        <HomeIcon size={64} color="white" />
        <h1 style={{ ...styles.text_white, ...styles.text_XL }}>Dashboard</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ flex: 7 }}>
          <div style={styles.flex_column}>
            <div
              style={{
                ...styles.widget,
                ...{ flex: 5 },
              }}
            >
              <div style={styles.content_row}>
                <TotalProductsIcon size={64} color="white" />
                <h1 style={{ ...styles.text_white, ...styles.text_XL }}>
                  Total Products
                </h1>
              </div>
              <h1 style={{ ...styles.text_white, ...styles.text_L }}>
                2546 Unique Items
              </h1>
              <h1 style={{ ...styles.text_white, ...styles.text_L }}>
                In inventory
              </h1>
            </div>
            <div style={styles.flex_row}>
              <div
                style={{
                  ...styles.widget,
                  ...{ flex: 5 },
                }}
              >
                <div style={styles.content_row}>
                  <StatsIcon size={64} color="white" />
                  <h1 style={{ ...styles.text_white, ...styles.text_XL }}>
                    Current Session
                  </h1>
                </div>
                <div style={styles.content_row}>
                  <ColoredCube size={32} color="#a48e41" />
                  <h1 style={{ ...styles.text_white, ...styles.text_L }}>
                    Added
                  </h1>
                </div>
                <h1 style={{ ...styles.text_white, ...styles.text_L }}>254</h1>
                <div style={styles.content_row}>
                  <ColoredCube size={32} color="#a44141" />
                  <h1 style={{ ...styles.text_white, ...styles.text_L }}>
                    Removed
                  </h1>
                </div>
                <h1 style={{ ...styles.text_white, ...styles.text_XL }}>118</h1>
              </div>
              <div
                style={{
                  ...styles.flex_column,
                  ...{
                    flex: 5,
                  },
                }}
              >
                <div
                  style={{
                    ...styles.widget,
                    ...{ flex: 1 },
                  }}
                >
                  <div style={styles.content_row}>
                    <LowStockIcon size={64} color="white" />
                    <h1 style={{ ...styles.text_white, ...styles.text_L }}>
                      Low Stock
                    </h1>
                  </div>
                  <h1 style={{ ...styles.text_white, ...styles.text_S }}>
                    Canned Pagmamahal
                  </h1>
                  <h1 style={{ ...styles.text_white, ...styles.text_S }}>
                    In Stock: 3
                  </h1>
                </div>
                <div
                  style={{
                    ...styles.widget,
                    ...{ flex: 1 },
                  }}
                >
                  <div style={styles.content_row}>
                    <RecentlyAddedIcon size={64} color="white" />
                    <h1
                      style={{
                        ...styles.text_white,
                        ...styles.text_L,
                      }}
                    >
                      Recently Added
                    </h1>
                  </div>
                  <h1 style={{ ...styles.text_white, ...styles.text_M }}>
                    Zidane's Water
                  </h1>
                  <h1 style={{ ...styles.text_white, ...styles.text_S }}>
                    Added 02/17/2023
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 3 }}>
          <div style={styles.widget}>
            <div style={styles.content_row}>
              <LogsIcon size={64} color="white" />
              <div style={styles.wrapper_column}>
                <h1 style={{ ...styles.text_white, ...styles.text_L }}>
                  Recent
                </h1>
                <h1 style={{ ...styles.text_white, ...styles.text_L }}>
                  Transactions
                </h1>
              </div>
            </div>
            <div style={{ marginBottom: "8px" }} />
            <h1 style={{ ...styles.text_white, ...styles.text_M }}>
              Kopiko Blanca
            </h1>
            <h1 style={{ ...styles.text_white, ...styles.text_S }}>
              Added: 96
            </h1>
            <h1 style={{ ...styles.text_white, ...styles.text_S }}>
              Removed: 105
            </h1>
            <h1 style={{ ...styles.text_white, ...styles.text_XS }}>
              02/17/2023
            </h1>
            <div style={{ marginBottom: "8px" }} />
            <h1 style={{ ...styles.text_white, ...styles.text_M }}>
              Zidane's Water
            </h1>
            <h1 style={{ ...styles.text_white, ...styles.text_S }}>
              Added: 49
            </h1>
            <h1 style={{ ...styles.text_white, ...styles.text_S }}>
              Removed: 24
            </h1>
            <h1 style={{ ...styles.text_white, ...styles.text_XS }}>
              02/17/2023
            </h1>
            <div style={{ marginBottom: "8px" }} />
            <h1 style={{ ...styles.text_white, ...styles.text_M }}>
              Dan's Beefed Corn
            </h1>
            <h1 style={{ ...styles.text_white, ...styles.text_S }}>
              Added: 32
            </h1>
            <h1 style={{ ...styles.text_white, ...styles.text_S }}>
              Removed: 64
            </h1>
            <h1 style={{ ...styles.text_white, ...styles.text_XS }}>
              02/17/2023
            </h1>
            <div style={{ marginBottom: "8px" }} />
            <div style={styles.content_column}>
              <h1 style={{ ...styles.text_white, ...styles.text_M }}>
                Canned Pagmamahal
              </h1>
            </div>
            <h1 style={{ ...styles.text_white, ...styles.text_S }}>Added: 0</h1>
            <h1 style={{ ...styles.text_white, ...styles.text_S }}>
              Removed: 60
            </h1>
            <h1 style={{ ...styles.text_white, ...styles.text_XS }}>
              02/17/2023
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
