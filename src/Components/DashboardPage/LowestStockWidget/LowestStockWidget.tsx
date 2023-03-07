import * as React from "react";
import styles from "../../../styles";
import LowStockIcon from "../../Icons/LowStockIcon/LowStockIcon";
import { ProductList } from "../../../Interfaces/Interfaces";

export interface props {}

export default function LowestStockWidget(props: ProductList) {
  if (!props.Products[0]) {
    return (
      <div
        style={{
          ...styles.widget,
          ...{ flex: 1 },
        }}
      >
        <div style={styles.content_row}>
          <LowStockIcon size={64} color="white" />
          <p style={{ ...styles.text_white, ...styles.text_L }}>Lowest Stock</p>
        </div>
        <p style={{ ...styles.text_white, ...styles.text_S }}>
          There are no products yet...
        </p>
        <p style={{ ...styles.text_white, ...styles.text_S }}>
          No worries on running out!
        </p>
      </div>
    );
  }
  return (
    <div
      style={{
        ...styles.widget,
        ...{ flex: 1 },
      }}
    >
      <div style={styles.content_row}>
        <LowStockIcon size={64} color="white" />
        <p style={{ ...styles.text_white, ...styles.text_L }}>Lowest Stock</p>
      </div>
      <p style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Products[0].name}
      </p>
      <p style={{ ...styles.text_white, ...styles.text_S }}>
        In Stock: {props.Products[0].quantity}
      </p>
    </div>
  );
}
