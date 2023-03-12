import * as React from "react";
import styles from "../../styles";
import {
  Button,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import LoginChecker from "../../Components/LoginChecker/LoginChecker";
import { DeleteProduct, GetProduct } from "../../Components/Api/Api";
import { useMutation, useQuery, useQueryClient } from "react-query";
import ProductIcon from "../../Components/Icons/ProductIcon/ProductIcon";
import { useSelector } from "react-redux";
import {
  OldSessionState,
  ProductHistoryEntry,
} from "../../Interfaces/Interfaces";
import moment from "moment";

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
      queryClient.invalidateQueries("product");
      queryClient.invalidateQueries("logs");
    },
  });
  const old_session_checked = useSelector(
    (state: OldSessionState) => state.old_session_checked.value
  );
  if (isLoading || !old_session_checked) {
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
        <p style={{ ...styles.text_white, ...styles.text_XL }}>
          Individual Transaction Log
        </p>
        <div style={{ alignSelf: "center" }}>
          <TableContainer>
            <TableHead>
              <TableRow>
                <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                  Time
                </TableCell>
                <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                  Quantity
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {product.history.map(
                (history_entry: ProductHistoryEntry, index: number) => (
                  <TableRow
                    key={index}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell
                      style={{ ...styles.text_white, ...styles.text_S }}
                    >
                      {moment(history_entry.history_date).format(
                        "MM-DD-YYYY hh:mm A"
                      )}
                    </TableCell>
                    <TableCell
                      style={{ ...styles.text_white, ...styles.text_S }}
                    >
                      {history_entry.quantity}
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
