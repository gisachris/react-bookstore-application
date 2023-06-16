import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';

const BookList = ({ books, onDelete }) => (
  <section className="booksHolder">
    {
      books.map((book) => <Book key={book.id} book={book} onDelete={onDelete} />)
}
  </section>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
