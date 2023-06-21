import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from '../redux/books/bookSlice';
import '../styles/general.css';

const FormSection = () => {
  const [title, SetTitle] = useState('');
  const [author, setAuthor] = useState('');
  const allBooks = useSelector((state) => state.books);
  const bookLength = allBooks.length;

  const handleTitleChange = (event) => {
    SetTitle(event.target.value);
  };

  const handleAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const handleAfterClick = () => {
    setAuthor('');
    SetTitle('');
  };

  const dispatch = useDispatch();
  return (
    <section className="formSection">
      <span>ADD NEW BOOK</span>
      <form>
        <input type="text" required placeholder="enter a new book" value={title} onChange={handleTitleChange} />
        <input type="text" required placeholder="enter the author" value={author} onChange={handleAuthorChange} />
        <button
          type="button"
          onClick={() => {
            const madeBook = {
              item_id: `item${bookLength + 1}`,
              title,
              author,
              category: 'fiction',
            };

            dispatch(add(madeBook));
            handleAfterClick();
          }}
        >
          ADD BUTTON
        </button>
      </form>
    </section>
  );
};

export default FormSection;
