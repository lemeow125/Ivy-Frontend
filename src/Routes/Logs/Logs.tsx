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

export default function Logs() {
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
                Amount Change
              </TableCell>
              <TableCell style={{ ...styles.text_white, ...styles.text_M }}>
                Timestamp
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SampleLogData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                  {row.id}
                </TableCell>
                <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                  {row.p_id}
                </TableCell>
                <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                  {row.p_name}
                </TableCell>
                <TableCell
                  style={{
                    ...{
                      color: row.amount_changed < 0 ? "#a44141" : "#80b28a",
                    },
                    ...styles.text_S,
                  }}
                >
                  {row.amount_changed}
                </TableCell>
                <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
                  {row.timestamp}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
