import * as React from "react";
import styles from "../../styles";
import { Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { LoginState } from "../../Interfaces/Interfaces";
import { useSelector } from "react-redux";

export default function Product() {
  let { id } = useParams();
  const logged_in = useSelector((state: LoginState) => state.logged_in.value);
  if (!logged_in) {
    return <Navigate to="/Login" replace />;
  }
  return (
    <div>
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
