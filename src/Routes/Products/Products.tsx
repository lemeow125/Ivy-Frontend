import React from "react";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";
import ProductsIcon from "../../Components/Icons/ProductsIcon/ProductsIcon";
import AddIcon from "../../Components/Icons/AddIcon/AddIcon";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { SampleProducts } from "../../Components/SampleData/SampleData";

export default function Products() {
  const navigate = useNavigate();

  return (
    <div style={{ margin: 32, height: "100%" }}>
      <div style={styles.content_row}>
        <div style={{ ...styles.content_row, ...{ flex: 1 } }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <ProductsIcon size={8} color="white" />
            <h1 style={styles.text_large}>Products</h1>
          </div>
          <div
            style={{
              ...styles.content_row,
              ...{ flex: 1, justifyContent: "flex-end" },
            }}
          >
            <Button
              onClick={() => navigate("/Products/AddProduct")}
              style={styles.button_add_product}
            >
              <AddIcon size={8} color="white" />
              <p style={styles.text_medium}>Add Product</p>
            </Button>
          </div>
        </div>
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
              <TableCell style={styles.text}>Last Modified</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SampleProducts.map((row) => (
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
    </div>
  );
}
