import React from 'react';
import '../styles/general.css';
// import PropTypes from 'prop-types';

const FormSection = (/* { books, setBooks } */) => (
  <section className="formSection">
    <span>ADD NEW BOOK</span>
    <form>
      <input type="text" required placeholder="enter a new book" />
      <input type="text" required placeholder="enter the author" />
      <button type="button">ADD BUTTON</button>
    </form>
  </section>
);

// FormSection.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       author: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   setBooks: PropTypes.func.isRequired,
// };

export default FormSection;
