import React from "react";

export interface props {
  children: React.ReactNode;
  width: string;
  height: string;
}

export default function DashboardContainer(props: props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "flex-start",
        justifyContent: "left",
        backgroundColor: "#1d3b33",
        borderRadius: 16,
        padding: 8,
        paddingLeft: 48,
        width: props.width,
        height: props.height,
        lineHeight: 0.4,
      }}
    >
      {props.children}
    </div>
  );
}
