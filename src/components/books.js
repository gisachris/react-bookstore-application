import React, { useEffect } from 'react';
import '../styles/general.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, deleteBooks } from '../redux/books/bookSlice';

const Book = () => {
  const allBooks = useSelector((state) => state.books.books);
  const loadingState = useSelector((state) => state.books.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line
  }, []);

  const handleDeleteClick = (itemID) => {
    dispatch(deleteBooks(itemID));
  };

  const handleButtonClick = (itemID) => {
    handleDeleteClick(itemID);
  };

  useEffect(() => {
    dispatch(fetchData());
    // eslint-disable-next-line
  }, []);

  if (allBooks.length === 0) {
    return (
      <div>
        <h1>No books have been added yet!</h1>
      </div>
    );
  }

  if (loadingState) {
    return (
      <div>loading...</div>
    );
  }

  return (
    <section className="booksHolder">
      {allBooks.map((book) => (
        <div className="SinglebookArrange" key={book.item_id}>
          <section className="bookImfo">
            <span>{book.category}</span>
            <h2>{book.title}</h2>
            <h3>{book.author}</h3>
            <button type="submit">Comments</button>
            <button type="submit" data-index={book.item_id} onClick={() => handleButtonClick(book.item_id)}>Remove</button>
            <button type="submit">Edit</button>
          </section>
          <section className="progress">
            <div className="perDisplay" />
            <article className="percentagesData">
              <span>20%</span>
              <span>Complete</span>
            </article>
          </section>
          <section className="otherImfo">
            <span>CHAPTER 16</span>
            <span>The Chapter</span>
            <button type="submit">UPDATE PROGRESS</button>
          </section>
        </div>
      ))}
    </section>
  );
};

export default Book;
