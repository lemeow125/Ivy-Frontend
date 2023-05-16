import * as React from "react";
import styles from "../../../styles";
import { ProductList } from "../../../Interfaces/Interfaces";
import ProductIcon from "../../Icons/ProductIcon/ProductIcon";
import { useNavigate } from "react-router-dom";

export default function BlobView({ Products }: ProductList) {
  const navigate = useNavigate();
  return (
    <div>
      {Products.map((row) => (
        <div
          key={row.id}
          style={{
            borderRadius: 16,
            backgroundColor: "#1d3b33",
            margin: 32,
            lineHeight: 0,
            padding: 16,
          }}
        >
          <button
            style={{
              lineHeight: 0,
              display: "flex",
              flexDirection: "column",
              justifySelf: "flex-start",
              alignItems: "flex-start",
              width: "100%",
              border: "none",
              background: "none",
            }}
            onClick={() => navigate("/Product/" + row.id)}
          >
            <div style={styles.content_row}>
              <ProductIcon size={32} color="white" />{" "}
              <p style={{ ...styles.text_white, ...styles.text_L }}>
                {row.name}
              </p>
            </div>

            <p style={{ ...styles.text_white, ...styles.text_M }}>
              ID: {row.id}
            </p>
            <p style={{ ...styles.text_white, ...styles.text_S }}>
              Date Added: {row.date_added}
            </p>
          </button>
        </div>
      ))}
    </div>
  );
}
