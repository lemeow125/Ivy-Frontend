import { TableCell } from "@mui/material";
import { useState } from "react";
import styles from "../../../styles";
import IsNumber from "../IsNumber/IsNumber";

export default function StockRenderer(in_stock: number) {
  const [stock, setStock] = useState(in_stock);
  if (stock >= 0 && stock <= 3) {
    return (
      <TableCell>
        <input
          style={{
            ...styles.text_red,
            ...{ border: "none", background: "none" },
            ...styles.text_S,
          }}
          value={stock}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (IsNumber(e.target.value)) {
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
            ...styles.text_S,
          }}
          value={stock}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (IsNumber(e.target.value)) {
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
            ...styles.text_S,
          }}
          value={stock}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (IsNumber(e.target.value)) {
              setStock(parseInt(e.target.value));
            }
          }}
        />
      </TableCell>
    );
  }
}
