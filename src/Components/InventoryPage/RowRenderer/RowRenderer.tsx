import * as React from "react";
import { ProductList } from "../../../Interfaces/Interfaces";
import styles from "../../../styles";
import { TableBody, TableRow, TableCell } from "@mui/material";
import StockRenderer from "../StockRenderer/StockRenderer";

export default function RowRenderer(props: ProductList) {
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
