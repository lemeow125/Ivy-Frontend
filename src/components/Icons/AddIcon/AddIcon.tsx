import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function AddIcon(props: props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size + "px"}
      height={props.size + "px"}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
