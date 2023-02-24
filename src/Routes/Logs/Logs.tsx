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

function createData(
  id: number,
  p_id: number,
  p_name: string,
  amount_changed: number,
  timestamp: string
) {
  return { id, p_id, p_name, amount_changed, timestamp };
}

const sample_data = [
  createData(1, 1, "Zidanes Water", -5, "2/24/2023 10:05AM"),
  createData(2, 1, "Zidanes Water", +10, "2/24/2023 1:05PM"),
  createData(3, 2, "Dans Beefed Corn", +25, "2/25/2023 4:05PM"),
  createData(4, 2, "Dans Beefed Corn", -15, "2/26/2023 3:35PM"),
];

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
        <LogsIcon size={8} color="white" />
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
            {sample_data.map((row) => (
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
