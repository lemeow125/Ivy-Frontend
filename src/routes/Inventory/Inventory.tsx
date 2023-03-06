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

export default function Inventory() {
  return (
    <div style={{ height: "100%" }}>
      <LoginChecker />
      <div style={styles.content_row}>
        <InventoryIcon size={64} color="white" />
        <h1 style={{ ...styles.text_white, ...styles.text_XL }}>Inventory</h1>
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
          <TableBody>
            {SampleInventoryData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                  {row.id}
                </TableCell>
                <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                  {row.name}
                </TableCell>
                {StockRenderer(row.in_stock)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
