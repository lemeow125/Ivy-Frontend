import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "logged_in",
  initialState: {
    value: false,
  },
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = loginSlice.actions;

export default loginSlice.reducer;
