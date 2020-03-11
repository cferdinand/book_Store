import React from "react";

const BooksOfTheYear = ({ books }) => {
  const BooksList = () => {
    return books.map(book => {
      return (
        <div className="book-name-photo-holder">
          <img src={book.photo} className="small-book-photo" />
          <div className="book-author-info-holder">
            <span className="book-name">{book.book_name}</span>
            <p>
              by <span className="book-author">{book.author}</span>
            </p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="books-container">
      <h4>Books of the year</h4>
      <BooksList />
    </div>
  );
};

export default BooksOfTheYear;
