import React from "react";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";
import ProductsIcon from "../../Components/Icons/ProductsIcon/ProductsIcon";
import AddIcon from "../../Components/Icons/AddIcon/AddIcon";
import { Button } from "@mui/material";
import ViewManager from "../../Components/ProductsPage/ViewManager";
import { useQuery } from "react-query";
import { GetProducts } from "../../Components/Api/Api";
import LoginChecker from "../../Components/LoginChecker/LoginChecker";
import { useSelector } from "react-redux";
import { RootState } from "../../Plugins/Redux/Store/Store";

export default function Products() {
  const navigate = useNavigate();
  const {
    data: products,
    isLoading,
    error,
  } = useQuery("products", GetProducts, { retry: 0 });
  const old_session_checked = useSelector(
    (state: RootState) => state.old_session_checked.value
  );
  if (isLoading || !old_session_checked) {
    return (
      <div>
        <LoginChecker />
        <div style={styles.content_row}>
          <div style={{ ...styles.content_row, ...{ flex: 1 } }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <ProductsIcon size={64} color="white" />
              <p style={{ ...styles.text_white, ...styles.text_XL }}>
                Products
              </p>
            </div>
          </div>
        </div>
        <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
          <p style={{ ...styles.text_white, ...styles.text_L }}>
            Loading products...
          </p>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <LoginChecker />
        <div style={styles.content_row}>
          <div style={{ ...styles.content_row, ...{ flex: 1 } }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <ProductsIcon size={64} color="white" />
              <p style={{ ...styles.text_white, ...styles.text_XL }}>
                Products
              </p>
            </div>
          </div>
        </div>
        <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
          <p style={{ ...styles.text_red, ...styles.text_L }}>
            Error loading products
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <LoginChecker />
      <div style={styles.content_row}>
        <div style={{ ...styles.content_row, ...{ flex: 1 } }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <ProductsIcon size={64} color="white" />
            <p style={{ ...styles.text_white, ...styles.text_XL }}>Products</p>
          </div>
          <div
            style={{
              ...styles.content_row,
              ...{ justifyContent: "flex-end", flex: 1 },
            }}
          >
            <Button
              onClick={() => navigate("/NewProduct")}
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
      <ViewManager Products={products} />
    </div>
  );
}
