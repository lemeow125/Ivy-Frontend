import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
import CancelIcon from "../../../Components/Icons/CancelIcon/CancelIcon";
import EditIcon from "../../../Components/Icons/EditIcon/EditIcon";
import styles from "../../../styles";


type EditProductParams = {
  id?: string;
};

export default function EditProduct() {
  const { id } = useParams<EditProductParams>();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [stocks, setStocks] = useState("");

  useEffect(() => {
    const product = ProductsLists.find(
      (product) => product.id.toString().padStart(3, "0") === id
    );
    if (product) {
      setName(product.name);
      setStocks(product.stocks.toString());
    }
  }, [id]);

  const handleStocksChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 0) {
      setStocks(value.toString());
    }
  };

  const handleUpdateProduct = () => {
    const updatedProduct: ProductType = {
      id: parseInt(id || "0"), // add a default value of "0" for id if it's undefined and pad with leading zeros
      name: name,
      stocks: parseInt(stocks),
      lastModified: new Date().toLocaleString(),
    };

    const index = ProductsLists.findIndex(
      (product) => product.id.toString().padStart(3, "0") === id
    );
    ProductsLists.splice(index, 1, updatedProduct);

    navigate("/Products");
  };

  const handleCancel = () => {
    navigate("/Products");
  };

  return (
    <div style={{ margin: 32, height: "100%" }}>
      <div style={styles.content_row}>
        <ProductsIcon size={8} color="white" />
        <h1 style={styles.text_large}>Edit Product</h1>
      </div>
      <TableContainer>
        <Table style={{ color: "white", textAlign: "center" }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ color: "white" }}>Product ID</TableCell>
              <TableCell style={{ color: "white" }}>Product Name</TableCell>
              <TableCell style={{ color: "white" }}>Stocks</TableCell>
              <TableCell style={{ color: 'white' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ textAlign: "center" }}>
            <TableRow>
              <TableCell style={{ color: "white" }}>{id}</TableCell>
              <TableCell style={{ color: "white" }}>{name}</TableCell>
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
                <button onClick={handleUpdateProduct}
                  style={{
                  ...styles.button_primary,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#1d3b33",
                  borderRadius: 50,
                  }}>
                  <EditIcon size={3} color="white" />
                  <span style={styles.text_medium}>Update</span>
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
    </div>
  );
}
