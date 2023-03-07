const styles: { [key: string]: React.CSSProperties } = {
  route_wrapper: {
    width: "85%",
    position: "fixed",
    left: "15%",
    overflowY: "scroll",
    height: "100%",
    backgroundColor: "#0b2322",
  },
  /*
  Font Sizes
  Extra-Large: 2rem
  Large: 1.6rem
  Medium: 1.2rem
  Small: 1rem
  Tiny: 0.8rem
   */
  text_white: {
    color: "white",
    fontWeight: "bold",
  },
  text_red: {
    color: "#a44141",
    fontWeight: "bold",
  },
  text_orange: {
    color: "#c57331",
    fontWeight: "bold",
  },
  text_green: {
    color: "#80b28a",
    fontWeight: "bold",
  },
  text_XL: {
    fontSize: "2rem",
  },
  text_L: {
    fontSize: "1.6rem",
  },
  text_M: {
    fontSize: "1.2rem",
  },
  text_S: {
    fontSize: "1rem",
  },
  text_XS: {
    fontSize: "0.8rem",
  },
  logo_text: {
    color: "#80b38b",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  header_wrapper: {
    display: "flex",
    flexDirection: "row",
    position: "sticky",
    top: 0,
    backgroundColor: "#3d4848",
    paddingRight: 32,
    paddingLeft: 0,
  },
  header_left: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    justifyContent: "left",
    alignItems: "center",
    paddingLeft: 16,
  },
  header_right: {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    justifyContent: "right",
    alignItems: "center",
  },
  login_button: {
    backgroundColor: "#9e8500",
    width: "8rem",
    height: 32,
    border: "none",
    padding: 8,
    borderRadius: 16,
  },
  button_add_product: {
    backgroundColor: "#80b38b",
    display: "flex",
    flexDirection: "row",
    width: "14rem",
    height: "64px",
    border: "none",
    padding: 8,
    borderRadius: 16,
    gap: 4,
  },
  button_baseline: {
    width: "12rem",
    height: 32,
    border: "none",
    padding: 8,
    borderRadius: 16,
    margin: 4,
  },
  logout_button: {
    backgroundColor: "#0b2322",
    width: "14rem",
    height: "3rem",
    border: "none",
    padding: 8,
    borderRadius: 16,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: "left",
  },
  sidebar_button: {
    backgroundColor: "#0b2322",
    width: "14rem",
    height: "3rem",
    border: "none",
    padding: 8,
    paddingRight: "32",
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: "left",
  },
  widget: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1d3b33",
    alignSelf: "stretch",
    borderRadius: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 32,
    margin: 8,
    lineHeight: 0.5,
  },
  content_row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  content_column: {
    display: "flex",
    flexDirection: "column",
    lineHeight: 0,
  },
  content_center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  flex_row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  flex_column: {
    display: "flex",
    flexDirection: "column",
  },
  sidebar_container: {
    height: "100vh",
    width: "100%",
    paddingLeft: "2rem",
    backgroundColor: "#3d4848",
  },
};

export default styles;
