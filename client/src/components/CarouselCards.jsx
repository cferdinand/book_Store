import React from "react";
import Stars from "@material-ui/lab/Rating";

const CarouselCards = ({ book }) => {
  return (
    <div className="carousel-book-wrapper">
      <div className="carousel-book-content">
        <img className="carousel-book-photo" src={book.photo} />
        <div className="carousel-book-info-container">
          <div className="carousel-book-info">
            <div className="carousel-name-author-section">
              <p className="carousel-book-name">{book.book_name}</p>
              <p className="carousel-book-author">{`by ${book.author}`}</p>
            </div>
            <div className="carousel-book-meta">
              <Stars
                value={Number(book.ratings)}
                name="half-rating"
                precision={0.25}
                size="small"
                readOnly={true}
              />
              <span className="carousel-book-votes">
                {`${Number(book.votes).toLocaleString()} voters`}
              </span>
            </div>
            <div className="carousel-description">
              <p>{`${book.book_description.slice(0, 150)}...`}</p>
            </div>
            <button className="carousel-book-button">See The Book</button>
          </div>
        </div>
      </div>
      <div className="carousel-transparent"></div>
    </div>
  );
};

export default CarouselCards;
