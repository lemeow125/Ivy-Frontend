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
  const [searchTerm, setSearchTerm] = useState("");
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
        <div style={styles.content_row}>
          <Switch
            style={{ flex: 1 }}
            onClick={() => toggleTableView(!tableView)}
          />
          <div style={{ flex: 8 }} />
          <div
            style={{
              ...styles.content_row,
              ...{ flex: 1, justifyContent: "flex-end" },
            }}
          >
            <p style={{ ...styles.text_white, ...styles.text_S }}>
              Search&nbsp;
            </p>
            <input
              style={{
                ...{
                  flex: 5,
                  height: "2rem",
                },
                ...styles.text_S,
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchTerm(e.target.value);
              }}
              maxLength={20}
            />
          </div>
        </div>
        <TableView
          Products={props.Products.filter((Product) =>
            Product.name.toLowerCase().includes(searchTerm)
          )}
        />
      </div>
    );
  } else {
    return (
      <div>
        <div style={styles.content_row}>
          <Switch
            style={{ flex: 1 }}
            onClick={() => toggleTableView(!tableView)}
          />
          <div style={{ flex: 8 }} />
          <div
            style={{
              ...styles.content_row,
              ...{ flex: 1, justifyContent: "flex-end" },
            }}
          >
            <p style={{ ...styles.text_white, ...styles.text_S }}>
              Search&nbsp;
            </p>
            <input
              style={{
                ...{
                  flex: 5,
                  height: "2rem",
                },
                ...styles.text_S,
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSearchTerm(e.target.value);
              }}
              maxLength={20}
            />
          </div>
        </div>
        <BlobView
          Products={props.Products.filter((Product) =>
            Product.name.toLowerCase().includes(searchTerm)
          )}
        />
      </div>
    );
  }
}
