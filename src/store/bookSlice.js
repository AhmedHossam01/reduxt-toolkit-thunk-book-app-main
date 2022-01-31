import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const insertBook = createAsyncThunk(
  "books/insertBook",
  async (args, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;

    try {
      const res = await fetch("http://localhost:3005/books", {
        method: "POST",
        body: JSON.stringify({ ...args, author: getState().auth.name }),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "books/deleteBook",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      await fetch(`http://localhost:3005/books/${args.item.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });

      return args.item;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    // getBooks
    [getBooks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getBooks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },

    // insertBook
    [insertBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [insertBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [insertBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);
    },

    // deleteBook
    [deleteBook.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteBook.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = state.books.filter((book) => book.id !== action.payload.id);
    },
  },
});

export default booksSlice.reducer;
