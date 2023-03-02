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
                <TableCell style={styles.text}>{row.in_stock}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
