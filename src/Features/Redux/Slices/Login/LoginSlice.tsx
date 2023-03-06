import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "logged_in",
  initialState: {
    value: false,
  },
  reducers: {
    toggle_login: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle_login } = loginSlice.actions;

export default loginSlice.reducer;
