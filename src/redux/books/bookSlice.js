import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    remove: (state, action) => {
      state.filter((book) => book !== action.payload);
    },
    add: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default bookSlice.reducer;
export const { remove, add } = bookSlice.actions;
