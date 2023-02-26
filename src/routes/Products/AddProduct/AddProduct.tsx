import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsLists from "../../../Components/ProductsLists/ProductsLists";
import { ProductType } from "../../../Components/ProductType/ProductType";
import styles from "../../../styles";
import ProductsIcon from "../../../Components/Icons/ProductsIcon/ProductsIcon";
import ProductInfo from "../../../Components/ProductInfo/ProductInfo";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [stocks, setStocks] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleStocksChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStocks(event.target.value);
  };

  const handleAddProduct = () => {
    if (name && stocks) {
      const newProduct: ProductType = {
        id: ProductsLists.length + 1,
        name: name,
        stocks: parseInt(stocks),
        lastModified: new Date().toLocaleString(),
      };
      ProductsLists.push(newProduct);
    }
    navigate("/Products");
  };

  const handleCancel = () => {
    navigate("/Products");
  };

  return (
    <div style={{ margin: 32, height: "100%" }}>
      <div style={styles.content_row}>
        <ProductsIcon size={8} color="white" />
        <h1 style={styles.text_large}>Products</h1>
      </div>
      <h1>Add Product</h1>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={handleNameChange} />
      <br />
      <label htmlFor="stocks">Stocks:</label>
      <input
        type="text"
        id="stocks"
        value={stocks}
        onChange={handleStocksChange}
      />
      <br />
      <button onClick={handleAddProduct}>Add</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}
