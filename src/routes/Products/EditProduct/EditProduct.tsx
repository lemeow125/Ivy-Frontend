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
    const product = ProductsLists.find((product) => product.id.toString().padStart(3, '0') === id);
    if (product) {
      setName(product.name);
      setStocks(product.stocks.toString());
    }
  }, [id]);

  const handleStocksChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStocks(event.target.value);
  };

  const handleUpdateProduct = () => {
    const updatedProduct: ProductType = {
      id: parseInt(id || "0"), // add a default value of "0" for id if it's undefined and pad with leading zeros
      name: name,
      stocks: parseInt(stocks),
      lastModified: new Date().toLocaleString(),
    };

    const index = ProductsLists.findIndex((product) => product.id.toString().padStart(3, '0') === id);
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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Stocks</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{id}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>
                <TextField
                  type="number"
                  value={stocks}
                  onChange={handleStocksChange}
                  InputProps={{
                    inputProps: { min: 0 },
                  }}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <button onClick={handleUpdateProduct}>Update</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}
