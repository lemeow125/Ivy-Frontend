const styles: { [key: string]: React.CSSProperties } = {
  background: {
    backgroundColor: "#0b2322",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  logo_title: {
    color: "#6c9575",
    fontSize: 26,
    fontWeight: "bold",
  },
  header_container: {
    display: "flex",
    flexDirection: "row",
    position: "sticky",
    backgroundColor: "#3d4848",
    top: 0,
    paddingRight: 32,
    paddingLeft: 32,
  },
  header_left: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    justifyContent: "left",
    alignItems: "center",
  },
  header_right: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    justifyContent: "right",
    alignItems: "center",
  },
};

export default styles;
