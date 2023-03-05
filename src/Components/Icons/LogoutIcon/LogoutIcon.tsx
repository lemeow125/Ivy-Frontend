import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function LogoutIcon(props: props) {
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
      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
      <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
    </svg>
  );
}
