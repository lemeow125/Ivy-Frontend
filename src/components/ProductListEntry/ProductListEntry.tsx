import React, { useEffect, useState } from "react";

export interface props {
  children: React.ReactNode;
}

export default function ProductListEntry(props: props) {
  const [size, setSize] = useState(64);

  useEffect(() => {
    function onEnter() {
      setSize(256);
    }
    function onLeave() {
      setSize(128);
    }

    document
      .getElementById("container")
      ?.addEventListener("mouseenter", onEnter);
    document
      .getElementById("container")
      ?.addEventListener("mouseleave", onLeave);
    return () => {
      document
        .getElementById("container")
        ?.removeEventListener("mouseenter", onEnter);
      document
        .getElementById("container")
        ?.removeEventListener("mouseleave", onLeave);
    };
  }, []);
  return (
    <div
      id="container"
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#497f4d",
        width: size,
        height: size,
      }}
    >
      {props.children}
    </div>
  );
}
