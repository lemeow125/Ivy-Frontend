import * as React from "react";
import LogsIcon from "../../Components/Icons/LogsIcon/LogsIcon";
import styles from "../../styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { SampleLogData } from "../../Components/SampleData/SampleData";
import LoginChecker from "../../Components/LoginChecker/LoginChecker";
import { useQuery } from "react-query";
import { GetLogs, UserInfo } from "../../Components/Api/Api";
import { OldSessionState, ProductLog } from "../../Interfaces/Interfaces";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Logs() {
  const logs = useQuery("logs", GetLogs, { retry: 0 });
  const old_session_checked = useSelector(
    (state: OldSessionState) => state.old_session_checked.value
  );
  if (logs.isLoading || !old_session_checked) {
    return (
      <div>
        <LoginChecker />
        <div style={styles.flex_row}>
          <LogsIcon size={64} color="white" />
          <p style={{ ...styles.text_white, ...styles.text_XL }}>Logs</p>
        </div>
        <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
          <p style={{ ...styles.text_white, ...styles.text_L }}>
            Loading logs...
          </p>
        </div>
      </div>
    );
  } else if (logs.error) {
    return (
      <div>
        <LoginChecker />
        <div style={styles.flex_row}>
          <LogsIcon size={64} color="white" />
          <p style={{ ...styles.text_white, ...styles.text_XL }}>Logs</p>
        </div>
        <div style={{ ...styles.content_column, ...{ alignItems: "center" } }}>
          <p style={{ ...styles.text_red, ...styles.text_L }}>
            Error loading logs
          </p>
        </div>
      </div>
    );
  }
  return (
    <div>
      <LoginChecker />
      <div style={styles.flex_row}>
        <LogsIcon size={64} color="white" />
        <p style={{ ...styles.text_white, ...styles.text_XL }}>Logs</p>
      </div>
      <TableContainer
        style={{
          backgroundColor: "#1d3b33",
          borderRadius: 8,
        }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                Log ID
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                Product ID
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                Product
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                Quantity
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                User
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                Timestamp
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.data.map((row: ProductLog, index: number) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                  {row.history_id}
                </TableCell>
                <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                  {row.id}
                </TableCell>
                <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                  {row.name}
                </TableCell>
                <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                  {row.quantity}
                </TableCell>
                <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                  {row.changed_by}
                </TableCell>
                <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                  {row.history_date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
