import React from "react";
import styles from "../../styles";
import InventoryIcon from "../../Components/Icons/InventoryIcon/InventoryIcon";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { SampleInventoryData } from "../../Components/SampleData/SampleData";
import StockRenderer from "../../Components/InventoryPage/StockRenderer/StockRenderer";
import LoginChecker from "../../Components/LoginChecker/LoginChecker";
import { GetProducts, UpdateProduct } from "../../Components/Api/Api";
import { useMutation, useQuery, useQueryClient } from "react-query";
import RowRenderer from "../../Components/InventoryPage/RowRenderer/RowRenderer";

export default function Inventory() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery("products", GetProducts, { retry: 0 });

  if (isLoading) {
    return (
      <div>
        <LoginChecker />
        <div style={styles.content_row}>
          <div style={{ ...styles.content_row, ...{ flex: 1 } }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <InventoryIcon size={64} color="white" />
              <p style={{ ...styles.text_white, ...styles.text_XL }}>
                Inventory
              </p>
            </div>
          </div>
        </div>
        <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
          <p style={{ ...styles.text_white, ...styles.text_L }}>
            Loading inventory...
          </p>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <div style={styles.content_row}>
          <div style={{ ...styles.content_row, ...{ flex: 1 } }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <InventoryIcon size={64} color="white" />
              <p style={{ ...styles.text_white, ...styles.text_XL }}>
                Inventory
              </p>
            </div>
          </div>
        </div>
        <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
          <p style={{ ...styles.text_red, ...styles.text_L }}>
            Error loading inventory
          </p>
        </div>
      </div>
    );
  }
  return (
    <div style={{ height: "100%" }}>
      <LoginChecker />
      <div style={styles.content_row}>
        <InventoryIcon size={64} color="white" />
        <p style={{ ...styles.text_white, ...styles.text_XL }}>Inventory</p>
      </div>
      <TableContainer
        style={{
          backgroundColor: "#1d3b33",
          borderRadius: 8,
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                Product ID
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                Product
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                In Stock
              </TableCell>
            </TableRow>
          </TableHead>
          <RowRenderer Products={products} />
        </Table>
      </TableContainer>
    </div>
  );
}
