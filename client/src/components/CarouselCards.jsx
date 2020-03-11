import React from "react";
import Stars from "@material-ui/lab/Rating";

const CarouselCards = ({ book }) => {
  return (
    <div className="carousel-book-wrapper">
      <div className="carousel-book-content">
        <img className="carousel-book-photo" src={book.photo} />
        <div className="carousel-book-info">
          <div className="carousel-name-author">
            <p>{book.book_name}</p>
            <p>{`by ${book.author}`}</p>
          </div>
          <div className="carousel-book-meta">
            <Stars
              value={Number(book.ratings)}
              name="half-rating"
              precision={0.25}
              size="small"
              readOnly={true}
            />
            <span>{Number(book.votes).toLocaleString()}</span>
          </div>
          <div className="carousel-description">
            <p>{`${book.book_description.slice(0, 250)}...`}</p>
          </div>
          <button className="carousel-book-button">See The Book</button>
        </div>
      </div>
      <div className="carousel-transparent"></div>
    </div>
  );
};

export default CarouselCards;
