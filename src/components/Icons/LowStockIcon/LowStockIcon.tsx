import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function LowStockIcon(props: props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-zoom-exclamation"
        width={props.size + "vh"}
        height={props.size + "vh"}
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke={props.color}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
        <path d="M21 21l-6 -6"></path>
        <path d="M10 13v.01"></path>
        <path d="M10 7v3"></path>
      </svg>
    </div>
  );
}