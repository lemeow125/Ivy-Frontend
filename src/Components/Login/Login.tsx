import { useSelector, useDispatch } from "react-redux";
import { toggle } from "../../Features/Login/LoginSlice";
import { Button } from "@mui/material";
import styles from "../../styles";

export interface state {
  logged_in: {
    value: boolean;
  };
}
export default function Login() {
  const logged_in = useSelector((state: state) => state.logged_in.value);
  const dispatch = useDispatch();
  async function login() {
    await dispatch(toggle());
    await console.log("Login State Toggled " + logged_in);
  }

  if (logged_in) {
    return (
      <p style={{ ...styles.text_white, ...styles.text_M }}>Welcome Jophiel</p>
    );
  } else {
    return (
      <div>
        <Button
          onClick={login}
          value="Login"
          variant="contained"
          style={styles.login_button}
        >
          <p style={{ ...styles.text, ...styles.text_M }}>Login</p>
        </Button>
      </div>
    );
  }
}
