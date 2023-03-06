import * as React from "react";
import styles from "../../styles";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import LoginChecker from "../../Components/LoginChecker/LoginChecker";
import { DeleteProduct, GetProduct } from "../../Components/Api/Api";
import { useMutation, useQuery, useQueryClient } from "react-query";
import ProductIcon from "../../Components/Icons/ProductIcon/ProductIcon";

export default function Product() {
  const navigate = useNavigate();
  let { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["product", Number(id)],
    queryFn: () => GetProduct(Number(id)),
  });
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: DeleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });
  if (isLoading) {
    return (
      <div>
        <LoginChecker />
        <p style={{ ...styles.text_white, ...styles.text_XL }}>
          Individual Product View for id {id}
        </p>
        <div style={styles.content_center}>
          <p style={{ ...styles.text_white, ...styles.text_L }}>
            Loading product...
          </p>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <LoginChecker />
        <p style={{ ...styles.text_white, ...styles.text_XL }}>
          Individual Product View for id {id}
        </p>
        <div style={styles.content_center}>
          <p style={{ ...styles.text_red, ...styles.text_L }}>
            Error loading product
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <LoginChecker />
      <div style={styles.content_row}>
        <ProductIcon size={64} color="white" />
        <p style={{ ...styles.text_white, ...styles.text_XL }}>Product View</p>
      </div>

      <div style={styles.content_center}>
        <div style={{ ...styles.content_column, ...styles.content_column }}>
          <p style={{ ...styles.text_white, ...styles.text_L }}>
            Product Name: {product.name}
          </p>
          <p style={{ ...styles.text_white, ...styles.text_L }}>
            Date Added: {product.date_added}
          </p>
        </div>
        <Button
          style={{
            ...styles.button_baseline,
            ...{ backgroundColor: "#a44141" },
          }}
          onClick={() => {
            mutation.mutate(product.id);
            navigate("/Products");
          }}
          variant="contained"
        >
          Delete Product
        </Button>
      </div>
    </div>
  );
}
