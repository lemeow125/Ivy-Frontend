import { Button, TableCell } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "../../../styles";
import IsNumber from "../IsNumber/IsNumber";
import { UpdateProduct } from "../../Api/Api";
import { useQueryClient, useMutation } from "react-query";
import { Product } from "../../../Interfaces/Interfaces";
import { useDispatch } from "react-redux";
import {
  this_session_increment_removed,
  this_session_increment_added,
} from "../../../Features/Redux/Slices/TransactionsThisSessionSlice/TransactionsThisSessionSlice";

export default function StockRenderer(product: Product) {
  const [stock, setStock] = useState(product.quantity);
  const [valueChanged, setValueChanged] = useState(false);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: UpdateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries("products");
    },
  });

  function updateQuantity() {
    mutation.mutate({
      id: product.id,
      name: product.name,
      quantity: stock,
    });
    if (stock > product.quantity) {
      dispatch(
        this_session_increment_added(Math.abs(stock - product.quantity))
      );
    } else {
      dispatch(
        this_session_increment_removed(Math.abs(stock - product.quantity))
      );
    }
    setValueChanged(false);
  }
  useEffect(() => {
    if (stock !== product.quantity) {
      setValueChanged(true);
    } else if (stock === product.quantity) {
      setValueChanged(false);
    }
  }, [stock]);
  let style;
  if (stock >= 0 && stock <= 3) {
    style = styles.text_red;
  } else if (stock >= 4 && stock < 9) {
    style = styles.text_orange;
  } else {
    style = styles.text_green;
  }
  return (
    <TableCell>
      <div style={styles.content_row}>
        <input
          style={{
            ...style,
            ...{ border: "none", background: "none", width: 64 },
            ...styles.text_S,
          }}
          value={stock}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (IsNumber(e.target.value)) {
              setStock(parseInt(e.target.value));
            }
          }}
        />
        <div style={{ paddingRight: 64 }} />
        <Button
          disabled={!valueChanged}
          style={{ backgroundColor: "#80b38a" }}
          onClick={() => {
            updateQuantity();
          }}
          variant="contained"
        >
          Confirm
        </Button>
      </div>
    </TableCell>
  );
}
