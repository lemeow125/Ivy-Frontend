import * as React from "react";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styles from "../../../styles";
import { ProductList } from "../../../Interfaces/Interfaces";

export default function TableView({ Products }: ProductList) {
  return (
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
            <TableCell style={styles.text}>Last Modified</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Products.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell style={styles.text}>{row.id}</TableCell>
              <TableCell style={styles.text}>{row.name}</TableCell>
              <TableCell style={styles.text}>{row.last_modified}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
