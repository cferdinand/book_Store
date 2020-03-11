import React from "react";

const CarouselCards = ({ book }) => {
  return (
    <div className="carousel-book-wrapper">
      <div className="carousel-book-content">
        <img className="carousel-book-photo" src={book.photo} />
        <div className="carousel-book-info">
          <div className="carousel-name-author">
            <p>{book.name}</p>
            <p>{`by ${book.author}`}</p>
          </div>
          <div className="carousel-description">
            <p>{book.book_description}</p>
          </div>
        </div>
      </div>
      <div className="carousel-transparent"></div>
    </div>
  );
};

export default CarouselCards;
