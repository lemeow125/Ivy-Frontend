import React from "react";

export interface props {
  size: number;
  color: string;
}

export default function CancelIcon(props: props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size + "vh"}
      height={props.size + "vh"}
      viewBox="0 0 24 24"
      fill="none"
      stroke={props.color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M7.5 7.5l9 9M16.5 7.5l-9 9" />
    </svg>
  );
}
