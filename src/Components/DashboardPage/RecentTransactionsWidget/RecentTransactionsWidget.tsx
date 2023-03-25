import * as React from "react";
import { ProductLog, ProductLogList } from "../../../Interfaces/Interfaces";
import styles from "../../../styles";
import LogsIcon from "../../Icons/LogsIcon/LogsIcon";
import Moment from "react-moment";

export default function RecentTransactionsWidget(props: ProductLogList) {
  return (
    <div style={{ flex: 3 }}>
      <div style={styles.widget}>
        <div style={styles.content_row}>
          <LogsIcon size={64} color="white" />
          <div style={styles.wrapper_column}>
            <p style={{ ...styles.text_white, ...styles.text_L }}>Recent</p>
            <p style={{ ...styles.text_white, ...styles.text_L }}>
              Transactions
            </p>
          </div>
        </div>
        {props.ProductLogs.slice(0, 5).map((log: ProductLog, index: number) => {
          return (
            <div key={index}>
              <div style={{ marginBottom: "8px" }} />
              <p style={{ ...styles.text_white, ...styles.text_M }}>
                {log.name}
              </p>
              <p style={{ ...styles.text_white, ...styles.text_S }}>
                Quantity: {log.quantity}
              </p>
              <p style={{ ...styles.text_white, ...styles.text_S }}>
                {log.history_date}
              </p>
              <p style={{ ...styles.text_white, ...styles.text_XS }}>
                Transaction ID: {log.history_id}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
