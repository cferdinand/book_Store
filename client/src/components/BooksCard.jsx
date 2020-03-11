import React from "react";
import Summary from "./Summary.jsx";

const BooksCard = ({ book }) => {
  const ListOfLikes = () => {
    return book.likes.map(likes => {
      return <img className="liker-pics" src={likes.photo}></img>;
    });
  };
  return (
    <div className="book-wrapper">
      <div className="transparent">
        <img className="book-photo" src={book.photo} />
        <Summary desc={book.book_description} />
      </div>
      <div className="book-content">
        <div className="book-info">
          <div className="name-author">
            <p>{book.book_name}</p>
            <p>
              by <span>{book.author}</span>
            </p>
          </div>
          <div className="description">
            <p>{book.book_description.slice(0, 100)}</p>
          </div>
        </div>
      </div>
      <div className="book-likes">
        <hr className="likes-hr" />
        <div className="liker">
          <ListOfLikes />
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
