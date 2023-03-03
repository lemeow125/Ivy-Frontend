import * as React from "react";

import styles from "../../../styles";
import { ProductList } from "../../../Interfaces/Interfaces";

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
          <p style={styles.text}>{row.name}</p>
          <p style={styles.text}>ID: {row.id}</p>
          <p style={styles.text_small}>Last Modified: {row.last_modified}</p>
        </div>
      ))}
    </div>
  );
}
