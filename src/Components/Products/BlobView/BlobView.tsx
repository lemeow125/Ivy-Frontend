import * as React from "react";

import styles from "../../../styles";
import { ProductList } from "../../../Interfaces/Interfaces";
import ProductIcon from "../../Icons/ProductIcon/ProductIcon";

export default function BlobView({ Products }: ProductList) {
  return (
    <div>
      {Products.map((row) => (
        <div
          key={row.id}
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 16,
            backgroundColor: "#1d3b33",
            margin: 32,
            lineHeight: 0,
            padding: 16,
          }}
        >
          <div style={styles.content_row}>
            <ProductIcon size={4} color="white" />{" "}
            <p style={styles.text}>{row.name}</p>
          </div>

          <p style={styles.text}>ID: {row.id}</p>
          <p style={styles.text_small}>Last Modified: {row.last_modified}</p>
        </div>
      ))}
    </div>
  );
}
