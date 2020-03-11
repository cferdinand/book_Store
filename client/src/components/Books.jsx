import React from "react";
import BooksCard from "./BooksCard";
import Genres from "./Genres.jsx";

const Books = ({ books }) => {
  const BooksViewList = () => {
    return books.map(book => {
      return <BooksCard book={book} />;
    });
  };
  return (
    <div className="books-view-container">
      <Genres />
      <div className="book-holder list-of-books">
        <BooksViewList />
      </div>
    </div>
  );
};

export default Books;
