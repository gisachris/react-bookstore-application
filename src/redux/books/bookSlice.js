import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    remove: (state, action) => state.filter((book) => book.item_id !== action.payload),
    add: (state, action) => [...state, action.payload],
  },
});

export default bookSlice.reducer;
export const { remove, add } = bookSlice.actions;
