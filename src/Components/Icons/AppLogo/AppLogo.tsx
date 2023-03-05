import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function AppLogo(props: props) {
  return (
    <svg
      width={props.size + "px"}
      height={props.size + "px"}
      viewBox="0 0 24 24"
      strokeWidth="2"
      stroke={props.color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M2 9a10 10 0 1 0 20 0"></path>
      <path d="M12 19a10 10 0 0 1 10 -10"></path>
      <path d="M2 9a10 10 0 0 1 10 10"></path>
      <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5"></path>
      <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5"></path>
    </svg>
  );
}
