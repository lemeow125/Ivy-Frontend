import styles from "../../styles";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserActivate } from "../../Components/Api/Api";
import { ActivationParams } from "../../Interfaces/Interfaces";

export default function Activation() {
  let { uid, token } = useParams();
  const [status, setStatus] = useState(0);
  async function verify(activation: ActivationParams) {
    let status = await UserActivate(activation);
    if (status) {
      setStatus(1);
    } else {
      setStatus(2);
    }
  }
  useEffect(() => {
    if (uid && token) {
      verify({ uid, token });
    }
  }, [uid, token]);
  if (status === 1) {
    return (
      <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
        <p style={{ ...styles.text_white, ...styles.text_L }}>User ID: {uid}</p>
        <p style={{ ...styles.text_white, ...styles.text_L }}>
          Activation Token: {token}
        </p>
        <p style={{ ...styles.text_green, ...styles.text_L }}>
          Activation Successful. Please login
        </p>
      </div>
    );
  }
  if (status === 2) {
    return (
      <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
        <p style={{ ...styles.text_white, ...styles.text_L }}>User ID: {uid}</p>
        <p style={{ ...styles.text_white, ...styles.text_L }}>
          Activation Token: {token}
        </p>
        <p style={{ ...styles.text_red, ...styles.text_L }}>
          Invalid Activation Link
        </p>
      </div>
    );
  }
  return (
    <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
      <p style={{ ...styles.text_white, ...styles.text_L }}>User ID: {uid}</p>
      <p style={{ ...styles.text_white, ...styles.text_L }}>
        Activation Token: {token}
      </p>
      <p style={{ ...styles.text_white, ...styles.text_L }}>Activating...</p>
    </div>
  );
}
