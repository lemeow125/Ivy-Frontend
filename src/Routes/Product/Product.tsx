import * as React from "react";
import styles from "../../styles";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";

export default function Product() {
  let { id } = useParams();
  return (
    <div style={{ margin: 32, height: "100%" }}>
      <h1 style={{ ...styles.text_white, ...styles.text_XL }}>
        Individual Product View for id {id}
      </h1>
      <Button
        style={{
          ...styles.button_baseline,
          ...{ backgroundColor: "#80b38b" },
        }}
        variant="contained"
      >
        Login
      </Button>
    </div>
  );
}
