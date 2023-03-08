import React, { useState } from "react";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";
import AddIcon from "../../Components/Icons/AddIcon/AddIcon";
import { Button } from "@mui/material";
import { AddProduct } from "../../Components/Api/Api";
import { useMutation, useQueryClient } from "react-query";
import LoginChecker from "../../Components/LoginChecker/LoginChecker";
export default function NewProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: AddProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
      queryClient.invalidateQueries("logs");
    },
  });
  return (
    <div>
      <LoginChecker />
      <div style={{ ...styles.content_row, ...{ flex: 1 } }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <AddIcon size={64} color="white" />
          <p style={{ ...styles.text_white, ...styles.text_XL }}>Add Product</p>
        </div>
      </div>
      <div style={styles.content_center}>
        <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
          <div style={styles.content_row}>
            <p
              style={{
                ...styles.text_white,
                ...styles.text_M,
                ...{ marginRight: 4 },
              }}
            >
              Product Name
            </p>
            <input
              style={{
                ...{ width: "32rem", height: "2rem" },
                ...styles.text_S,
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setProduct(e.target.value);
              }}
              maxLength={20}
            />
          </div>
          <div style={{ padding: 8 }} />
          <Button
            onClick={async () => {
              try {
                await mutation.mutate({
                  name: product,
                });
                navigate("/Products");
              } catch (error) {}
            }}
            style={styles.button_add_product}
          >
            <p style={{ ...styles.text_white, ...styles.text_M }}>
              Add Product
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}
