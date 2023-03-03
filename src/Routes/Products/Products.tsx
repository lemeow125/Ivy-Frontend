import React, { useState } from "react";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";
import ProductsIcon from "../../Components/Icons/ProductsIcon/ProductsIcon";
import AddIcon from "../../Components/Icons/AddIcon/AddIcon";
import { Button, Switch } from "@mui/material";
import { SampleProducts } from "../../Components/SampleData/SampleData";
import TableView from "../../Components/Products/TableView/TableView";
import BlobView from "../../Components/Products/BlobView/BlobView";

export default function Products() {
  const navigate = useNavigate();
  const [tableView, toggleTableView] = useState(false);
  function view() {
    if (tableView) {
      return <TableView Products={SampleProducts} />;
    } else {
      return <BlobView Products={SampleProducts} />;
    }
  }
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
      <div style={styles.content_row}>
        <Switch onClick={() => toggleTableView(!tableView)} />
        <p style={styles.text_small}>View Type</p>
      </div>
      {view()}
    </div>
  );
}
