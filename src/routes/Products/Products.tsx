import React from "react";
import styles from "../../styles";
import AppLogo from "../../Components/Icons/AppLogo/AppLogo";
import ProductsIcon from "../../Components/Icons/ProductsIcon/ProductsIcon";
import ProductListEntry from "../../Components/ProductListEntry/ProductListEntry";

export default function Products() {
  return (
    <div style={styles.container}>
      <div style={styles.wrapper_row}>
        <ProductsIcon size={8} color="white" />
        <h1 style={styles.text_large}>Products</h1>
      </div>
    </div>
  );
}
