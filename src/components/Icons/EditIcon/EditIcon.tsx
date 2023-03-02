import React from "react";

export interface props {
  size: number;
  color: string;
}
export default function EditIcon(props: props) {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width={props.size + "vh"} height={props.size + "vh"} viewBox="0 0 24 24" fill="none" stroke={props.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 17l-1.557 -4.386a2 2 0 0 1 1.923 -2.614h12.268a2 2 0 0 1 1.923 2.614l-1.558 4.386" />
        <path d="M15 6h6v6" />
        <path d="M10 21h5" />
        <path d="M12 17v-5" />
        <path d="M9 6h-6v15a2 2 0 0 0 2 2h15v-6" />
      </svg>
    </div>
  );
}
