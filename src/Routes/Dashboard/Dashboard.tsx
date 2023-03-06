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
import LoginChecker from "../../Components/LoginChecker/LoginChecker";

export default function Dashboard() {
  return (
    <div>
      <LoginChecker />
      <div style={styles.flex_row}>
        <HomeIcon size={64} color="white" />
        <p style={{ ...styles.text_white, ...styles.text_XL }}>Dashboard</p>
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
                <p style={{ ...styles.text_white, ...styles.text_XL }}>
                  Total Products
                </p>
              </div>
              <p style={{ ...styles.text_white, ...styles.text_L }}>
                2546 Unique Items
              </p>
              <p style={{ ...styles.text_white, ...styles.text_L }}>
                In inventory
              </p>
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
                  <p style={{ ...styles.text_white, ...styles.text_XL }}>
                    Current Session
                  </p>
                </div>
                <div style={styles.content_row}>
                  <ColoredCube size={32} color="#a48e41" />
                  <p style={{ ...styles.text_white, ...styles.text_L }}>
                    Added
                  </p>
                </div>
                <p style={{ ...styles.text_white, ...styles.text_L }}>254</p>
                <div style={styles.content_row}>
                  <ColoredCube size={32} color="#a44141" />
                  <p style={{ ...styles.text_white, ...styles.text_L }}>
                    Removed
                  </p>
                </div>
                <p style={{ ...styles.text_white, ...styles.text_XL }}>118</p>
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
                    <p style={{ ...styles.text_white, ...styles.text_L }}>
                      Low Stock
                    </p>
                  </div>
                  <p style={{ ...styles.text_white, ...styles.text_S }}>
                    Canned Pagmamahal
                  </p>
                  <p style={{ ...styles.text_white, ...styles.text_S }}>
                    In Stock: 3
                  </p>
                </div>
                <div
                  style={{
                    ...styles.widget,
                    ...{ flex: 1 },
                  }}
                >
                  <div style={styles.content_row}>
                    <RecentlyAddedIcon size={64} color="white" />
                    <p
                      style={{
                        ...styles.text_white,
                        ...styles.text_L,
                      }}
                    >
                      Recently Added
                    </p>
                  </div>
                  <p style={{ ...styles.text_white, ...styles.text_M }}>
                    Zidane's Water
                  </p>
                  <p style={{ ...styles.text_white, ...styles.text_S }}>
                    Added 02/17/2023
                  </p>
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
                <p style={{ ...styles.text_white, ...styles.text_L }}>Recent</p>
                <p style={{ ...styles.text_white, ...styles.text_L }}>
                  Transactions
                </p>
              </div>
            </div>
            <div style={{ marginBottom: "8px" }} />
            <p style={{ ...styles.text_white, ...styles.text_M }}>
              Kopiko Blanca
            </p>
            <p style={{ ...styles.text_white, ...styles.text_S }}>Added: 96</p>
            <p style={{ ...styles.text_white, ...styles.text_S }}>
              Removed: 105
            </p>
            <p style={{ ...styles.text_white, ...styles.text_XS }}>
              02/17/2023
            </p>
            <div style={{ marginBottom: "8px" }} />
            <p style={{ ...styles.text_white, ...styles.text_M }}>
              Zidane's Water
            </p>
            <p style={{ ...styles.text_white, ...styles.text_S }}>Added: 49</p>
            <p style={{ ...styles.text_white, ...styles.text_S }}>
              Removed: 24
            </p>
            <p style={{ ...styles.text_white, ...styles.text_XS }}>
              02/17/2023
            </p>
            <div style={{ marginBottom: "8px" }} />
            <p style={{ ...styles.text_white, ...styles.text_M }}>
              Dan's Beefed Corn
            </p>
            <p style={{ ...styles.text_white, ...styles.text_S }}>Added: 32</p>
            <p style={{ ...styles.text_white, ...styles.text_S }}>
              Removed: 64
            </p>
            <p style={{ ...styles.text_white, ...styles.text_XS }}>
              02/17/2023
            </p>
            <div style={{ marginBottom: "8px" }} />
            <div style={styles.content_column}>
              <p style={{ ...styles.text_white, ...styles.text_M }}>
                Canned Pagmamahal
              </p>
            </div>
            <p style={{ ...styles.text_white, ...styles.text_S }}>Added: 0</p>
            <p style={{ ...styles.text_white, ...styles.text_S }}>
              Removed: 60
            </p>
            <p style={{ ...styles.text_white, ...styles.text_XS }}>
              02/17/2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
