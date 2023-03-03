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

export default function Logs() {
  function change_color(amount: number) {
    if (amount > 0) {
      return <TableCell style={styles.text_green}>{amount}</TableCell>;
    } else {
      return <TableCell style={styles.text_red}>{amount}</TableCell>;
    }
  }
  return (
    <div style={{ margin: 32, height: "100%" }}>
      <div style={styles.flex_row}>
        <LogsIcon size={64} color="white" />
        <h1 style={styles.text_large}>Logs</h1>
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
              <TableCell style={styles.text}>Log ID</TableCell>
              <TableCell style={styles.text}>Product ID</TableCell>
              <TableCell style={styles.text}>Product</TableCell>
              <TableCell style={styles.text}>Amount Change</TableCell>
              <TableCell style={styles.text}>Timestamp</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {SampleLogData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell style={styles.text}>{row.id}</TableCell>
                <TableCell style={styles.text}>{row.p_id}</TableCell>
                <TableCell style={styles.text}>{row.p_name}</TableCell>
                {change_color(row.amount_changed)}
                <TableCell style={styles.text}>{row.timestamp}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
