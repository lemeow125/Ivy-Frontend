import * as React from "react";
import { ProductList } from "../../../Interfaces/Interfaces";
import styles from "../../../styles";
import { TableBody, TableRow, TableCell } from "@mui/material";
import StockRenderer from "../StockRenderer/StockRenderer";

export default function RowRenderer(props: ProductList) {
  if (props.Products.length === 0) {
    return (
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginLeft: 12,
        }}
      >
        <p style={{ ...styles.text_white, ...styles.text_L }}>
          No products yet. Add one!
        </p>
      </div>
    );
  }
  return (
    <TableBody>
      {props.Products.map((row) => (
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
          {StockRenderer(row)}
        </TableRow>
      ))}
    </TableBody>
  );
}
