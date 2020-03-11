import React from "react";
import Summary from "./Summary.jsx";
import Likers from "../helpers/LikerString.js";
import Stars from "@material-ui/lab/Rating";

const BooksCard = ({ book }) => {
  const ListOfLikes = () => {
    //Only show 3 images no matter the num of likes
    let result = book.likes.slice(0, 3);
    return result.map((likes, idx) => {
      return <img className="liker-pics" src={likes.photo}></img>;
    });
  };

  return (
    <div className="book-wrapper">
      <div className="transparent book-view">
        <img className="book-photo book-view" src={book.photo} />
        <Summary desc={book.book_description} />
      </div>
      <div className="book-content book-view">
        <div className="book-menu dotted-menu book-view">
          <li className="placeholder dotted-menu-list"></li>
          <li className="placeholder dotted-menu-list"></li>
          <li className="placeholder dotted-menu-list"></li>
        </div>
        <div className="book-info book-view">
          <div className="name-author book-view">
            <p className="book-name book-view">{book.book_name}</p>
            <p className="book-author book-view">{`by ${book.author}`}</p>
          </div>
          <div className="book-meta book-view">
            <Stars
              value={Number(book.ratings)}
              name="half-rating"
              precision={0.25}
              size="small"
              readOnly={true}
            />
            <span className="book-rating book-view">{`${Number(
              book.votes
            ).toLocaleString()} voters`}</span>
          </div>
          <div className="description">
            <p>{book.book_description.slice(0, 100)}</p>
          </div>
        </div>
      </div>
      <div className="book-likes book-view">
        <hr className="likes-hr book-view" />
        <div className="liker book-view">
          <ListOfLikes />
          <Likers book={book} />
        </div>
      </div>
    </div>
  );
};

export default BooksCard;
