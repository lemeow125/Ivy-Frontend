import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function NotFoundIcon(props: props) {
  return (
    <svg
      width={props.size + "px"}
      height={props.size + "px"}
      viewBox="0 0 24 24"
      strokeWidth="1"
      stroke={props.color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 7v4a1 1 0 0 0 1 1h3"></path>
      <path d="M7 7v10"></path>
      <path d="M10 8v8a1 1 0 0 0 1 1h2a1 1 0 0 0 1 -1v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1z"></path>
      <path d="M17 7v4a1 1 0 0 0 1 1h3"></path>
      <path d="M21 7v10"></path>
    </svg>
  );
}
