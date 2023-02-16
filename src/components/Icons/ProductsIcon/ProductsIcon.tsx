import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function ProductsIcon(props: props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-list-numbers"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        stroke-width="1"
        stroke={props.color}
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M11 6h9"></path>
        <path d="M11 12h9"></path>
        <path d="M12 18h8"></path>
        <path d="M4 16a2 2 0 1 1 4 0c0 .591 -.5 1 -1 1.5l-3 2.5h4"></path>
        <path d="M6 10v-6l-2 2"></path>
      </svg>
    </div>
  );
}