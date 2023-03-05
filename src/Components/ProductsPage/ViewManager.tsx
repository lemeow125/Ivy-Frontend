import * as React from "react";
import { useState } from "react";
import { Switch } from "@mui/material";
import TableView from "../../Components/ProductsPage/TableView/TableView";
import BlobView from "../../Components/ProductsPage/BlobView/BlobView";
import { ProductList } from "../../Interfaces/Interfaces";

export interface props {}

export default function ViewManager(props: ProductList) {
  const [tableView, toggleTableView] = useState(false);
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
