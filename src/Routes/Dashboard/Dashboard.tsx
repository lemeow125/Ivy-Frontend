import React, { useState } from "react";
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
import { useQuery } from "react-query";
import { GetLogs, GetProducts } from "../../Components/Api/Api";
import { ProductLog } from "../../Interfaces/Interfaces";

export default function Dashboard() {
  const logs = useQuery("logs", GetLogs, { retry: 0 });
  const products = useQuery("products", GetProducts, { retry: 0 });
  if (logs.isLoading && products.isLoading) {
    return (
      <div>
        <LoginChecker />
        <div style={styles.flex_row}>
          <HomeIcon size={64} color="white" />
          <p style={{ ...styles.text_white, ...styles.text_XL }}>Dashboard</p>
        </div>
        <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
          <p style={{ ...styles.text_white, ...styles.text_L }}>
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }
  if (logs.error || products.error) {
    <div>
      <LoginChecker />
      <div style={styles.flex_row}>
        <HomeIcon size={64} color="white" />
        <p style={{ ...styles.text_white, ...styles.text_XL }}>Dashboard</p>
      </div>
      <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
        <p style={{ ...styles.text_red, ...styles.text_L }}>
          Error loading dashboard
        </p>
      </div>
    </div>;
  }
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
                {products.data.length} Unique Item/s
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
                    {products.data[0].name}
                  </p>
                  <p style={{ ...styles.text_white, ...styles.text_S }}>
                    {products.data[0].date_added}
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
            {logs.data.slice(0, 5).map((log: ProductLog, index: number) => {
              console.log(log);
              return (
                <div key={index}>
                  <div style={{ marginBottom: "8px" }} />
                  <p style={{ ...styles.text_white, ...styles.text_M }}>
                    {log.name}
                  </p>
                  <p style={{ ...styles.text_white, ...styles.text_S }}>
                    Quantity: {log.quantity}
                  </p>
                  <p style={{ ...styles.text_white, ...styles.text_S }}>
                    Date: {log.history_date}
                  </p>
                  <p style={{ ...styles.text_white, ...styles.text_XS }}>
                    Transaction ID: {log.history_id}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
