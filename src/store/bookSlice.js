import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (args, thunkAPI) => {
    const res = await fetch("http://localhost:3005/books");
    const data = await res.json();

    return data;
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: null,
    isLoading: false,
  },
  extraReducers: {
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
  },
});

export default booksSlice.reducer;
