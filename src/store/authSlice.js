import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "authA",
  initialState: {
    isLoggedIn: false,
    name: "Ahmed Hossam",
  },
  reducers: {
    logInOut: (state, action) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { logInOut } = authSlice.actions;
export default authSlice.reducer;
