import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { ProductType } from "../../../Components/ProductType/ProductType";
import ProductsLists from "../../../Components/ProductsLists/ProductsLists";
import ProductsIcon from "../../../Components/Icons/ProductsIcon/ProductsIcon";
import AddIcon from "../../../Components/Icons/AddIcon/AddIcon";
import CancelIcon from "../../../Components/Icons/CancelIcon/CancelIcon";
import styles from "../../../styles";

export default function AddProduct() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [stocks, setStocks] = useState("");

  const handleStocksChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 0) {
      setStocks(value.toString());
    }
  };

  const handleAddProduct = () => {
    const maxId = Math.max(...ProductsLists.map((product) => product.id));
    const newProduct: ProductType = {
      id: maxId + 1,
      name: name,
      stocks: parseInt(stocks),
      lastModified: new Date().toLocaleString(),
    };

    ProductsLists.push(newProduct);

    navigate("/Products");
  };

  const handleCancel = () => {
    navigate("/Products");
  };

  return (
    <div style={{ margin: 32, height: "100%" }}>
      <div style={styles.content_row}>
        <ProductsIcon size={8} color="white" />
        <h1 style={styles.text_large}>Add Product</h1>
      </div>
      <TableContainer>
        <Table style={{ color: "white" }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "white"}}>Product Name</TableCell>
              <TableCell style={{ color: "white"}}>Stocks</TableCell>
              <TableCell style={{ color: 'white' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
            <TableCell style={{ color: "white"}}>
              <TextField
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{ style: { color: "white" } }}
                style={{ border: "1px solid white" }}
              />
            </TableCell>
              <TableCell style={{ color: "white" }}>
                <TextField
                  type="number"
                  value={stocks}
                  onChange={handleStocksChange}
                  InputProps={{
                    inputProps: { min: 0 },
                    style: { color: "white" },
                  }}
                  style={{ color: "white", border: "1px solid white" }}
                />
              </TableCell>
              <TableCell style={{ color: 'white' }}>
                <div style={{ display: "flex", gap: 8 }}>
                <button onClick={handleAddProduct}
                  style={{
                  ...styles.button_primary,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#1d3b33",
                  borderRadius: 50,
                  }}>
                  <AddIcon size={3} color="white" />
                  <span style={styles.text_medium}>Add</span>
                </button>
                <button onClick={handleCancel}
                  style={{
                  ...styles.button_primary,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#1d3b33",
                  borderRadius: 50,
                  }}>
                  <CancelIcon size={3} color="white" />
                  <span style={styles.text_medium}>Cancel</span>
                </button>
                </div>
                </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <div style={{ display: 'flex', gap: 16,marginLeft: 395 }}>
      
      </div>
    </div>
  );
}
