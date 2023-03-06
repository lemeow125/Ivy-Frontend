import * as React from "react";
import { useState } from "react";
import { Switch } from "@mui/material";
import TableView from "../../Components/ProductsPage/TableView/TableView";
import BlobView from "../../Components/ProductsPage/BlobView/BlobView";
import { ProductList } from "../../Interfaces/Interfaces";
import styles from "../../styles";

export interface props {}

export default function ViewManager(props: ProductList) {
  const [tableView, toggleTableView] = useState(true);
  if (props.Products.length === 0) {
    return (
      <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
        <p style={{ ...styles.text_white, ...styles.text_L }}>
          No products yet. Add one!
        </p>
      </div>
    );
  }
  if (tableView) {
    return (
      <div>
        <Switch onClick={() => toggleTableView(!tableView)} />
        <TableView Products={props.Products} />
      </div>
    );
  } else {
    return (
      <div>
        <Switch onClick={() => toggleTableView(!tableView)} />
        <BlobView Products={props.Products} />
      </div>
    );
  }
}
