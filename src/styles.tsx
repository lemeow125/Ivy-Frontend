const styles: { [key: string]: React.CSSProperties } = {
  route_wrapper: {
    width: "85%",
    position: "fixed",
    left: "15%",
    overflowY: "scroll",
    height: "100%",
    backgroundColor: "#0b2322",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "100%",
    alignItems: "center",
    paddingTop: 0,
    paddingLeft: 16,
  },
  text: {
    fontSize: "1.3vw",
    color: "white",
    fontWeight: "bold",
  },
  text_medium: {
    fontSize: "1.2vw",
    color: "white",
    fontWeight: "bold",
  },
  text_large: {
    fontSize: "2.2vw",
    color: "white",
    fontWeight: "bold",
  },
  text_extra_large: {
    fontSize: "3.2vw",
    color: "white",
  },
  logo_title: {
    color: "#6c9575",
    fontSize: 26,
    fontWeight: "bold",
  },
  header_wrapper: {
    display: "flex",
    flexDirection: "row",
    position: "sticky",
    top: 0,
    backgroundColor: "#3d4848",
    paddingRight: 32,
    paddingLeft: 32,
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
    width: "120%",
    height: 32,
    border: "none",
    padding: 8,
    borderRadius: 16,
  },
  logout_button: {
    backgroundColor: "#0b2322",
    height: 64,
    width: 192,
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
    width: "30vh",
    height: "6vh",
    border: "none",
    padding: 8,
    borderTopLeftRadius: 32,
    borderBottomLeftRadius: 32,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    justifyContent: "left",
  },
  sidebar_wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
    backgroundColor: "#3d4848",
    alignItems: "flex-end",
  },
  wrapper_row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  wrapper_column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "flex-start",
  },
  DashboardWidget_WrapperColumn: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
  },
  DashboardWidget_WrapperRow: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    width: "95%",
  },
};

export default styles;
