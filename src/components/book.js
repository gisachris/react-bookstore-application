import React from 'react';
import PropTypes from 'prop-types';
import '../styles/general.css';

const Book = ({ book, onDelete }) => {
  const {
    id, title, author, category, percentage,
  } = book;

  return (
    <div className="SinglebookArrange">
      <section className="bookImfo">
        <span>{category}</span>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <button type="submit">Comments</button>
        <button type="submit" data-index={id} onClick={() => onDelete(id)}>Remove</button>
        <button type="submit">Edit</button>
      </section>
      <section className="progress">
        <div className="perDisplay" />
        <article className="percentagesData">
          <span>{percentage}</span>
          <span>Complete</span>
        </article>
      </section>
      <section className="otherImfo">
        <span>CHAPTER 16</span>
        <span>The Chapter</span>
        <button type="submit">UPDATE PROGRESS</button>
      </section>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
