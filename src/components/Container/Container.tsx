import React from "react";
import Sidebar from "../Sidebar/Sidebar";

export interface props {
  children: React.ReactNode;
}

export default function Container(props: props) {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "85%", position: "fixed", left: "15%" }}>
          {props.children}
        </div>
        <div style={{ width: "15%", position: "fixed" }}>
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
