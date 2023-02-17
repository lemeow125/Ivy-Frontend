import React from "react";

export interface props {
  children: React.ReactNode;
}

export default function DashboardContainer(props: props) {
  return (
    <div style={{ marginRight: 32, marginLeft: 32 }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "flex-start",
          justifyContent: "left",
          backgroundColor: "#1d3b33",
          borderRadius: 16,
          padding: 16,
          width: "100%",
          height: "100%",
          lineHeight: 0.4,
          marginLeft: 8,
          marginRight: 8,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}
