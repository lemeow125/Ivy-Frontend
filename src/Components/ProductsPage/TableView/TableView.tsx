import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styles from "../../../styles";
import { ProductList } from "../../../Interfaces/Interfaces";
import { useNavigate } from "react-router-dom";

export default function TableView({ Products }: ProductList) {
  const navigate = useNavigate();
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
            <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
              Product ID
            </TableCell>
            <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
              Product
            </TableCell>
            <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
              Date Added
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Products.map((row) => (
            <TableRow
              key={row.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
              onClick={() => navigate("/Product/" + row.id)}
            >
              <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                {row.id}
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                {row.name}
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                {row.date_added}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
