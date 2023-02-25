import React from "react";
import styles from "../../styles";
import InventoryIcon from "../../Components/Icons/InventoryIcon/InventoryIcon";
import InventoryInfo from "../../Components/InventoryInfo/InventoryInfo";
import ProductsLists from "../../Components/ProductsLists/ProductsLists";

export default function Inventory() {
  return (
    <div style={{ margin: 32, height: "100%" }}>
      <div style={styles.content_row}>
        <InventoryIcon size={8} color="white" />
        <h1 style={styles.text_large}>Inventory</h1>
      </div>
      <InventoryInfo products={ProductsLists} />
    </div>
  );
}
