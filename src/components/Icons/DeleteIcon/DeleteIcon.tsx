import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function DeleteIcon(props: props) {
  return (
    <svg
      width={props.size + "px"}
      height={props.size + "px"}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7h16M5 10v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2V10" />
      <path d="M10 10v-3a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v3" />
      <path d="M9 7h6" />
    </svg>
  );
}
