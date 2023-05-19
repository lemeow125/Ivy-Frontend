import React from "react";
import "../../index.css";
import styles from "../../styles";
import HomeIcon from "../../Components/Icons/HomeIcon/HomeIcon";
import LoginChecker from "../../Components/LoginChecker/LoginChecker";
import { useQuery } from "react-query";
import {
  GetLogs,
  GetLowestStockedProduct,
  GetProducts,
} from "../../Components/Api/Api";
import { useSelector } from "react-redux";
import LowestStockWidget from "../../Components/DashboardPage/LowestStockWidget/LowestStockWidget";
import RecentlyAddedWidget from "../../Components/DashboardPage/RecentlyAddedWidget/RecentlyAddedWidget";
import TotalProductsWidget from "../../Components/DashboardPage/TotalProductsWidget/TotalProductsWidget";
import SessionStatsWidget from "../../Components/DashboardPage/SessionStatsWidget/SessionStatsWidget";
import RecentTransactionsWidget from "../../Components/DashboardPage/RecentTransactionsWidget/RecentTransactionsWidget";
import { RootState } from "../../Plugins/Redux/Store/Store";

export default function Dashboard() {
  const logs = useQuery("logs", GetLogs, { retry: 0 });
  const products = useQuery("products", GetProducts, { retry: 0 });
  const lowest_stock_product = useQuery(
    "lowest_stock_product",
    GetLowestStockedProduct,
    {
      retry: 0,
    }
  );
  const old_session_checked = useSelector(
    (state: RootState) => state.old_session_checked.value
  );
  if (
    logs.isLoading ||
    products.isLoading ||
    lowest_stock_product.isLoading ||
    !old_session_checked
  ) {
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
  if (logs.isError || products.isError || lowest_stock_product.isError) {
    return (
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
      </div>
    );
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
            <TotalProductsWidget Products={products.data} />
            <div style={styles.flex_row}>
              <SessionStatsWidget />
              <div
                style={{
                  ...styles.flex_column,
                  ...{
                    flex: 5,
                    alignSelf: "stretch",
                  },
                }}
              >
                <LowestStockWidget Products={lowest_stock_product.data} />
                <RecentlyAddedWidget Products={products.data} />
              </div>
            </div>
          </div>
        </div>
        <RecentTransactionsWidget ProductLogs={logs.data} />
      </div>
    </div>
  );
}
