import React from "react";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";
import ProductsIcon from "../../Components/Icons/ProductsIcon/ProductsIcon";
import AddIcon from "../../Components/Icons/AddIcon/AddIcon";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import ProductsLists from "../../Components/ProductsLists/ProductsLists";

export default function Products() {
  const navigate = useNavigate();

  return (
    <div style={{ margin: 32, height: "100%" }}>
      <div style={{ ...styles.content_row, justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <ProductsIcon size={8} color="white" />
          <h1 style={styles.text_large}>Products</h1>
        </div>
        <button
          onClick={() => navigate("/Products/AddProduct")}
          style={{
            ...styles.button_primary,
            display: "flex",
            alignItems: "center",
            gap: 8,
            backgroundColor: "#1d3b33",
            borderRadius: 50,
          }}
        >
          <AddIcon size={7} color="white" />
          <span style={styles.text_medium}>Add Product</span>
        </button>
      </div>
      <ProductInfo products={ProductsLists} />
    </div>
  );
}
