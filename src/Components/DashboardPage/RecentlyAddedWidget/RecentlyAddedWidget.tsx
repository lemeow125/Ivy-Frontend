import * as React from "react";
import styles from "../../../styles";
import { ProductList } from "../../../Interfaces/Interfaces";
import RecentlyAddedIcon from "../../Icons/RecentlyAddedIcon/RecentlyAddedIcon";

export default function RecentlyAddedWidget(props: ProductList) {
  if (!props.Products[0]) {
    return (
      <div
        style={{
          ...styles.widget,
          ...{ flex: 1 },
        }}
      >
        <div style={styles.content_row}>
          <RecentlyAddedIcon size={64} color="white" />
          <p
            style={{
              ...styles.text_white,
              ...styles.text_L,
            }}
          >
            Recently Added
          </p>
        </div>
        <p style={{ ...styles.text_white, ...styles.text_M }}>
          Nothing recently added...
        </p>
      </div>
    );
  }
  return (
    <div
      style={{
        ...styles.widget,
        ...{ flex: 1 },
      }}
    >
      <div style={styles.content_row}>
        <RecentlyAddedIcon size={64} color="white" />
        <p
          style={{
            ...styles.text_white,
            ...styles.text_L,
          }}
        >
          Recently Added
        </p>
      </div>
      <p style={{ ...styles.text_white, ...styles.text_M }}>
        {props.Products[0].name}
      </p>
      <p style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Products[0].date_added}
      </p>
    </div>
  );
}
