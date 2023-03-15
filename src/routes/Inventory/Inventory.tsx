import React from "react";
import styles from "../../styles";
import InventoryIcon from "../../Components/Icons/InventoryIcon/InventoryIcon";
import {
  Button,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import LoginChecker from "../../Components/LoginChecker/LoginChecker";
import { GetProducts } from "../../Components/Api/Api";
import { useQuery } from "react-query";
import RowRenderer from "../../Components/InventoryPage/RowRenderer/RowRenderer";
import AddIcon from "../../Components/Icons/AddIcon/AddIcon";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../Plugins/Redux/Store/Store";

export default function Inventory() {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery("products", GetProducts, { retry: 0 });
  const navigate = useNavigate();
  const old_session_checked = useSelector(
    (state: RootState) => state.old_session_checked.value
  );
  if (isLoading || !old_session_checked) {
    return (
      <div>
        <LoginChecker />
        <div style={styles.content_row}>
          <div style={{ ...styles.content_row, ...{ flex: 1 } }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <InventoryIcon size={64} color="white" />
              <p style={{ ...styles.text_white, ...styles.text_XL }}>
                Inventory
              </p>
            </div>
          </div>
        </div>
        <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
          <p style={{ ...styles.text_white, ...styles.text_L }}>
            Loading inventory...
          </p>
        </div>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <LoginChecker />
        <div style={styles.content_row}>
          <div style={{ ...styles.content_row, ...{ flex: 1 } }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <InventoryIcon size={64} color="white" />
              <p style={{ ...styles.text_white, ...styles.text_XL }}>
                Inventory
              </p>
            </div>
          </div>
        </div>
        <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
          <p style={{ ...styles.text_red, ...styles.text_L }}>
            Error loading inventory
          </p>
        </div>
      </div>
    );
  } else if (products.length === 0) {
    return (
      <div style={{ height: "100%" }}>
        <LoginChecker />
        <div style={styles.content_row}>
          <InventoryIcon size={64} color="white" />
          <p style={{ ...styles.text_white, ...styles.text_XL }}>Inventory</p>
        </div>
        <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
          <p
            style={{
              ...styles.text_white,
              ...styles.text_L,
              ...{ marginLeft: 16 },
            }}
          >
            No products yet. Add one!
          </p>
          <Button
            onClick={() => navigate("/NewProduct")}
            style={styles.button_add_product}
          >
            <AddIcon size={32} color="white" />
            <p style={{ ...styles.text_white, ...styles.text_M }}>
              Add Product
            </p>
          </Button>
        </div>
      </div>
    );
  }
  return (
    <div style={{ height: "100%" }}>
      <LoginChecker />
      <div style={styles.content_row}>
        <InventoryIcon size={64} color="white" />
        <p style={{ ...styles.text_white, ...styles.text_XL }}>Inventory</p>
      </div>
      <TableContainer
        style={{
          backgroundColor: "#1d3b33",
          borderRadius: 8,
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                Product ID
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                Product
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                In Stock
              </TableCell>
            </TableRow>
          </TableHead>
          <RowRenderer Products={products} />
        </Table>
      </TableContainer>
    </div>
  );
}
