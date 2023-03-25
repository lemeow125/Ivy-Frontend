import * as React from "react";
import LogsIcon from "../../Components/Icons/LogsIcon/LogsIcon";
import styles from "../../styles";
import {
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import LoginChecker from "../../Components/LoginChecker/LoginChecker";
import { useQuery } from "react-query";
import { GetLogs } from "../../Components/Api/Api";
import { ProductLog } from "../../Interfaces/Interfaces";
import { useState } from "react";
import { useSelector } from "react-redux";
import GetToday from "../../Components/LogsPage/GetToday/GetToday";
import { RootState } from "../../Plugins/Redux/Store/Store";

export default function Logs() {
  const logs = useQuery("logs", GetLogs, { retry: 0 });
  const old_session_checked = useSelector(
    (state: RootState) => state.old_session_checked.value
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [searchToday, setSearchToday] = useState("");
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
      <div style={styles.content_row}>
        <div style={{ ...{ flex: 2 }, ...styles.content_row }}>
          <p style={{ ...styles.text_white, ...styles.text_S }}>Show today</p>
          <Switch
            style={{ flex: 1 }}
            onClick={() => {
              if (searchToday === "") {
                setSearchToday(GetToday());
              } else {
                setSearchToday("");
              }
            }}
          />
        </div>

        <div style={{ flex: 6 }} />
        <div
          style={{
            ...styles.content_row,
            ...{ flex: 2, justifyContent: "flex-end" },
          }}
        >
          <p style={{ ...styles.text_white, ...styles.text_S }}>Search&nbsp;</p>
          <input
            style={{
              ...{
                flex: 5,
                height: "2rem",
              },
              ...styles.text_S,
            }}
            value={searchTerm}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
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
                Product Changed
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                Quantity Changed To
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                Transaction by
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                Timestamp
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {logs.data
              .filter(
                (Log: ProductLog) =>
                  (Log.name.toLowerCase().includes(searchTerm) ||
                    Log.history_user.toLowerCase().includes(searchTerm) ||
                    Log.history_date.toLowerCase().includes(searchTerm)) &&
                  Log.history_date.toLowerCase().includes(searchToday)
              )
              .map((row: ProductLog, index: number) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                    {row.name}
                  </TableCell>
                  <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                    {row.quantity}
                  </TableCell>
                  <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                    {row.history_user}
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
