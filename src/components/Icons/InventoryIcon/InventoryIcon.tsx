import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function InventoryIcon(props: props) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-box-seam"
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
        <path d="M12 3l8 4.5v9l-8 4.5l-8 -4.5v-9l8 -4.5"></path>
        <path d="M12 12l8 -4.5"></path>
        <path d="M8.2 9.8l7.6 -4.6"></path>
        <path d="M12 12v9"></path>
        <path d="M12 12l-8 -4.5"></path>
      </svg>
    </div>
  );
}
