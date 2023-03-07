import * as React from "react";
import {
  OldSessionState,
  ProductLogEntry,
} from "../../../Interfaces/Interfaces";
import styles from "../../../styles";
import { TableBody, TableRow, TableCell } from "@mui/material";
import { GetProduct, QueryUser } from "../../Api/Api";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";

export default function RowRenderer(props: ProductLogEntry) {
  const old_session_checked = useSelector(
    (state: OldSessionState) => state.old_session_checked.value
  );
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user_select_id_" + props.Product.id, props.Product.id],
    queryFn: () => QueryUser(props.Product.id),
  });
  if (isLoading || !old_session_checked) {
    <TableRow
      key={props.Product.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.history_id}
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.id}
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.name}
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.quantity}
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        Loading...
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.history_date}
      </TableCell>
    </TableRow>;
  } else if (error) {
    <TableRow
      key={props.Product.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.history_id}
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.id}
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.name}
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.quantity}
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        Loading...
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.history_date}
      </TableCell>
    </TableRow>;
  }
  return (
    <TableRow
      key={props.Product.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.history_id}
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.id}
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.name}
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.quantity}
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {isLoading || user.username}
      </TableCell>
      <TableCell style={{ ...styles.text_white, ...styles.text_S }}>
        {props.Product.history_date}
      </TableCell>
    </TableRow>
  );
}
