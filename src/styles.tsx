import React from "react";
const styles: { [key: string]: React.CSSProperties } = {
  background: {
    backgroundColor: "#0b2322",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    color: "white",
  },
  flex_row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    position: "sticky",
    top: 0,
    left: 0,
  },
};
export default styles;
