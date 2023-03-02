import React from "react";
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
  function change_color(in_stock: number) {
    if (in_stock > 0 && in_stock < 3) {
      return <TableCell style={styles.text_red}>{in_stock}</TableCell>;
    } else if (in_stock > 3 && in_stock < 9) {
      return <TableCell style={styles.text_orange}>{in_stock}</TableCell>;
    } else {
      return <TableCell style={styles.text_green}>{in_stock}</TableCell>;
    }
  }
  return (
    <div style={{ margin: 32, height: "100%" }}>
      <div style={styles.content_row}>
        <InventoryIcon size={8} color="white" />
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
                {change_color(row.in_stock)}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
