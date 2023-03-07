import { createSlice } from "@reduxjs/toolkit";

export const TransactionsThisSessionSlice = createSlice({
  name: "Transactions",
  initialState: {
    added: 0,
    removed: 0,
  },
  reducers: {
    this_session_increment_added: (state, action) => {
      state.added += action.payload;
    },
    this_session_increment_removed: (state, action) => {
      state.removed += action.payload;
    },
  },
});

export const { this_session_increment_added, this_session_increment_removed } =
  TransactionsThisSessionSlice.actions;

export default TransactionsThisSessionSlice.reducer;
