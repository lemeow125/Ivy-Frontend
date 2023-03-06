import React, { useEffect, useState } from "react";
import styles from "../../styles";
import { useNavigate } from "react-router-dom";
import AddIcon from "../../Components/Icons/AddIcon/AddIcon";
import { Button } from "@mui/material";
import { Navigate } from "react-router-dom";
import { LoginState } from "../../Interfaces/Interfaces";
import { useSelector } from "react-redux";
import { AddProduct } from "../../Components/Api/Api";
import { useMutation, useQueryClient } from "react-query";

export default function NewProduct() {
  const navigate = useNavigate();
  const logged_in = useSelector((state: LoginState) => state.logged_in.value);
  const [product, setProduct] = useState("");
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: AddProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
  if (!logged_in) {
    return <Navigate to="/Login" replace />;
  }
  return (
    <div>
      <div style={{ ...styles.content_row, ...{ flex: 1 } }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <AddIcon size={64} color="white" />
          <h1 style={{ ...styles.text_white, ...styles.text_XL }}>
            Add Product
          </h1>
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
              style={{ width: "32rem" }}
              onChange={(e: { target: { value: any } }) => {
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
