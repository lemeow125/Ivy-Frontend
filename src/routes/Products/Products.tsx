import React from "react";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";
import ProductsIcon from "../../Components/Icons/ProductsIcon/ProductsIcon";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import ProductsLists from "../../Components/ProductsLists/ProductsLists";

export default function Products() {
  const navigate = useNavigate();

  return (
    <div style={{ margin: 32, height: "100%" }}>
      <div style={styles.content_row}>
        <ProductsIcon size={8} color="white" />
        <h1 style={styles.text_large}>Products</h1>
      </div>
      <ProductInfo products={ProductsLists} />
      <button onClick={() => navigate("/Products/AddProduct")}>Add Product</button>
    </div>
  );
}
