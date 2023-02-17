import { PropaneSharp } from "@mui/icons-material";
import React from "react";

export interface props {
  color: string;
  size: number;
}
export default function ColoredCube(props: props) {
  return (
    <div style={{ paddingRight: 8 }}>
      <div
        style={{
          backgroundColor: props.color,
          width: props.size + "vh",
          height: props.size + "vh",
        }}
      />
    </div>
  );
}
