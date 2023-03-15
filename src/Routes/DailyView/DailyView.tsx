import React from "react";
import "../../index.css";
import styles from "../../styles";
import LoginChecker from "../../Components/LoginChecker/LoginChecker";
import { useQuery } from "react-query";
import {
  GetLogs,
  GetLowestStockedProduct,
  GetProducts,
} from "../../Components/Api/Api";
import { Product } from "../../Interfaces/Interfaces";
import { useSelector } from "react-redux";
import TodayIcon from "../../Components/Icons/TodayIcon/TodayIcon";
import moment from "moment";
import GetToday from "../../Components/GetToday/GetToday";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { RootState } from "../../Plugins/Redux/Store/Store";

export default function DailyView() {
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
  const navigate = useNavigate();
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
          <TodayIcon size={64} color="white" />
          <p style={{ ...styles.text_white, ...styles.text_XL }}>Daily View</p>
        </div>
        <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
          <p style={{ ...styles.text_white, ...styles.text_L }}>
            Loading today's summary...
          </p>
        </div>
      </div>
    );
  }
  if (logs.error || products.error || lowest_stock_product.isError) {
    <div>
      <LoginChecker />
      <div style={styles.flex_row}>
        <TodayIcon size={64} color="white" />
        <p style={{ ...styles.text_white, ...styles.text_XL }}>Daily View</p>
      </div>
      <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
        <p style={{ ...styles.text_red, ...styles.text_L }}>
          Error loading today's summary
        </p>
      </div>
    </div>;
  }
  return (
    <div>
      <LoginChecker />
      <div style={styles.flex_row}>
        <TodayIcon size={64} color="white" />
        <p style={{ ...styles.text_white, ...styles.text_XL }}>
          Products Modified Today
        </p>
      </div>
      <div style={styles.content_column}>
        {products.data
          .filter(
            (Product: Product) =>
              moment(Product.history[0].history_date).format("MM-DD-YYYY") ===
              GetToday()
          )
          .map((Product: Product) => (
            <button
              style={{
                ...styles.widget,
                ...{ border: "None" },
              }}
              onClick={() => navigate("/Product/" + Product.id)}
            >
              <p style={{ ...styles.text_white, ...styles.text_XL }}>
                Product: {Product.name}
              </p>
              <p style={{ ...styles.text_white, ...styles.text_XL }}>
                Last Modified:{" "}
                <Moment date={Product.history[0].history_date} fromNow />
              </p>
              <p style={{ ...styles.text_white, ...styles.text_XL }}>
                Current Stock: {Product.history[0].quantity}
              </p>
              <p style={{ ...styles.text_white, ...styles.text_XL }}>
                Daily Summary
              </p>
              <div style={{ alignSelf: "center" }}>
                {" "}
                <TableContainer>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{ ...styles.text_white, ...styles.text_M }}
                      >
                        Time
                      </TableCell>
                      <TableCell
                        style={{ ...styles.text_white, ...styles.text_M }}
                      >
                        Quantity
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {Product.history
                      .filter(
                        (history_entry) =>
                          moment(history_entry.history_date).format(
                            "MM-DD-YYYY"
                          ) === GetToday()
                      )
                      .map((history_entry, index: number) => (
                        <TableRow
                          key={index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            style={{ ...styles.text_white, ...styles.text_S }}
                          >
                            {moment(history_entry.history_date).format(
                              "hh:mm A"
                            )}
                          </TableCell>
                          <TableCell
                            style={{ ...styles.text_white, ...styles.text_S }}
                          >
                            {history_entry.quantity}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </TableContainer>
              </div>
            </button>
          ))}
      </div>
    </div>
  );
}
