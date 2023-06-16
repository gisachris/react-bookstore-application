import React, { useState } from 'react';
import FormSection from './form';
import BookList from './booklist';

const BooksDisplay = () => {
  const [books, setBooks] = useState([
    {
      id: 1, title: 'the dungeon', author: 'john rudwick', category: 'action', percentage: '25%',
    },
    {
      id: 2, title: 'west lands', author: 'andrew wigins', category: 'Romance', percentage: '70%',
    },
    {
      id: 3, title: 'LandScapes', author: 'boby drew', category: 'Art', percentage: '50%',
    },
  ]);

  const handleDeleteAction = (buttonId) => {
    const updatedBooks = books.filter((book) => book.id !== buttonId);
    setBooks(updatedBooks);
  };

  return (
    <div className="mainSection">
      <BookList books={books} setBooks={setBooks} onDelete={handleDeleteAction} />
      <FormSection books={books} setBooks={setBooks} />
    </div>
  );
};

export default BooksDisplay;
