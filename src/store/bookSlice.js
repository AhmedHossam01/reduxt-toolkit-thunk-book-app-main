import { createSlice } from "@reduxjs/toolkit";

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: null,
  },
  reducer: {},
});

export default booksSlice.reducer;
