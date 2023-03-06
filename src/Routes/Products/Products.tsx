import React from "react";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";
import ProductsIcon from "../../Components/Icons/ProductsIcon/ProductsIcon";
import AddIcon from "../../Components/Icons/AddIcon/AddIcon";
import { Button } from "@mui/material";
import { SampleProducts } from "../../Components/SampleData/SampleData";
import ViewManager from "../../Components/ProductsPage/ViewManager";

export default function Products() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={styles.content_row}>
        <div style={{ ...styles.content_row, ...{ flex: 1 } }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <ProductsIcon size={64} color="white" />
            <h1 style={{ ...styles.text_white, ...styles.text_XL }}>
              Products
            </h1>
          </div>
          <div
            style={{
              ...styles.content_row,
              ...{ justifyContent: "flex-end", flex: 1 },
            }}
          >
            <Button
              onClick={() => navigate("/Products/AddProduct")}
              style={styles.button_add_product}
            >
              <AddIcon size={32} color="white" />
              <p style={{ ...styles.text_white, ...styles.text_M }}>
                Add Product
              </p>
            </Button>
          </div>
        </div>
      </div>
      <ViewManager Products={SampleProducts} />
    </div>
  );
}
