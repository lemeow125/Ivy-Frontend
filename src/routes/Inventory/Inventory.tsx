import React, { useState } from "react";
import styles from "../../styles";
import InventoryIcon from "../../Components/Icons/InventoryIcon/InventoryIcon";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { SampleInventoryData } from "../../Components/SampleData/SampleData";

export default function Inventory() {
  function is_number(number: string) {
    const re = /^[0-9\b]+$/;
    if (re.test(number)) {
      return true;
    } else {
      return false;
    }
  }
  function StockRender(in_stock: number) {
    const [stock, setStock] = useState(in_stock);
    if (stock >= 0 && stock <= 3) {
      return (
        <TableCell>
          <input
            style={{
              ...styles.text_red,
              ...{ border: "none", background: "none" },
            }}
            value={stock}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (is_number(e.target.value) === true) {
                setStock(parseInt(e.target.value));
              }
            }}
          />
        </TableCell>
      );
    } else if (stock >= 4 && stock < 9) {
      return (
        <TableCell>
          <input
            style={{
              ...styles.text_orange,
              ...{ border: "none", background: "none" },
            }}
            value={stock}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (is_number(e.target.value) === true) {
                setStock(parseInt(e.target.value));
              }
            }}
          />
        </TableCell>
      );
    } else {
      return (
        <TableCell>
          <input
            style={{
              ...styles.text_green,
              ...{ border: "none", background: "none" },
            }}
            value={stock}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (is_number(e.target.value) === true) {
                setStock(parseInt(e.target.value));
              }
            }}
          />
        </TableCell>
      );
    }
  }
  return (
    <div style={{ margin: 32, height: "100%" }}>
      <div style={styles.content_row}>
        <InventoryIcon size={64} color="white" />
        <h1 style={styles.text_large}>Inventory</h1>
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
              <TableCell style={styles.text}>Product ID</TableCell>
              <TableCell style={styles.text}>Product</TableCell>
              <TableCell style={styles.text}>In Stock</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SampleInventoryData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={styles.text}>{row.id}</TableCell>
                <TableCell style={styles.text}>{row.name}</TableCell>
                {StockRender(row.in_stock)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
