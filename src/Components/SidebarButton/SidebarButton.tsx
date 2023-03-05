import React from "react";
import { Button } from "@mui/material";
import styles from "../../styles";

export interface props {
  name: string;
  onClick: any;
  children: React.ReactNode;
}
export default function SidebarButton(props: props) {
  return (
    <div
      style={{
        paddingBottom: 16,
      }}
    >
      <Button
        onClick={props.onClick}
        variant="contained"
        style={styles.sidebar_button}
      >
        {props.children}
        <p style={{ ...styles.text_white, ...styles.text_S }}>{props.name}</p>
      </Button>
    </div>
  );
}
