import * as React from "react";
import styles from "../../styles";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import LoginChecker from "../../Components/LoginChecker/LoginChecker";
import { GetProduct } from "../../Components/Api/Api";
import { useQuery } from "react-query";

export default function Product() {
  let { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", Number(id)],
    queryFn: () => GetProduct(Number(id)),
  });
  if (isLoading) {
    return (
      <div>
        <LoginChecker />
        <h1 style={{ ...styles.text_white, ...styles.text_XL }}>
          Individual Product View for id {id}
        </h1>
        <div style={styles.content_center}>
          <h1 style={{ ...styles.text_white, ...styles.text_L }}>
            Loading product...
          </h1>
        </div>
      </div>
    );
  }
  return (
    <div>
      <LoginChecker />
      <h1 style={{ ...styles.text_white, ...styles.text_XL }}>
        Individual Product View for id {id}
      </h1>
      <div style={styles.content_center}>
        <h1 style={{ ...styles.text_white, ...styles.text_L }}>
          Product Name: {product.name}
        </h1>
        <h1 style={{ ...styles.text_white, ...styles.text_L }}>
          Date Added: {product.date_added}
        </h1>
        <Button
          style={{
            ...styles.button_baseline,
            ...{ backgroundColor: "#80b38b", justifySelf: "center" },
          }}
          variant="contained"
        >
          Login
        </Button>
      </div>
    </div>
  );
}
