import React from "react";
import { Button } from "@mui/material";
import styles from "../../styles";

export interface props {
  name: string;
  onClick: any;
}
export default function SidebarButton(props: props) {
  return (
    <div style={{ display: "flex", paddingBottom: 16 }}>
      <Button
        onClick={props.onClick}
        variant="contained"
        style={styles.sidebar_button}
      >
        <p style={styles.text}>{props.name}</p>
      </Button>
    </div>
  );
}
