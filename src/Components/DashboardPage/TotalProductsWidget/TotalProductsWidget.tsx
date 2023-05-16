import * as React from "react";
import styles from "../../../styles";
import TotalProductsIcon from "../../Icons/TotalProductsIcon/TotalProductsIcon";
import { ProductList } from "../../../Interfaces/Interfaces";
import { useEffect, useState } from "react";

export interface props {}

export default function TotalProductsWidget(props: ProductList) {
  const [items, setItems] = useState("Loading...");
  useEffect(() => {
    if (props.Products.length === 0) {
      setItems("No products");
    } else if (props.Products.length === 1) {
      setItems("1 product");
    } else {
      setItems(props.Products.length + " Unique Items");
    }
  }, [props.Products.length]);
  return (
    <div
      style={{
        ...styles.widget,
        ...{ flex: 5 },
      }}
    >
      <div style={styles.content_row}>
        <TotalProductsIcon size={64} color="white" />
        <p style={{ ...styles.text_white, ...styles.text_XL }}>
          Total Products
        </p>
      </div>
      <p style={{ ...styles.text_white, ...styles.text_L }}>{items}</p>
      <p style={{ ...styles.text_white, ...styles.text_L }}>In inventory</p>
    </div>
  );
}
