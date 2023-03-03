import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function LogsIcon(props: props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-clipboard-data"
      width={props.size + "px"}
      height={props.size + "px"}
      viewBox="0 0 24 24"
      stroke-width="1"
      stroke={props.color}
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"></path>
      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z"></path>
      <path d="M9 17v-4"></path>
      <path d="M12 17v-1"></path>
      <path d="M15 17v-2"></path>
      <path d="M12 17v-1"></path>
    </svg>
  );
}
