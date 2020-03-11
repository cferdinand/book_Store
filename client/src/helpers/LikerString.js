import React from "react";

const Likers = ({ book }) => {
  let likerString = "This booked has not been favorited yet";
  if (book.likes.length > 2) {
    likerString = (
      <p className="liked-users liker-string">
        <b>{book.likes[0].user_name}</b> and{" "}
        <b>{book.likes.length - 1} other friends</b> like this
      </p>
    );
  } else if ((book.likes.length = 2)) {
    likerString = (
      <p className="liked-users liker-string">
        <b>{book.likes[0].user_name}</b> and <b>{book.likes[1].user_name}</b>{" "}
        like this
      </p>
    );
  } else {
    likerString = (
      <p className="liked-users liker-string">
        <b>{book.likes[0].user_name}</b> likes this
      </p>
    );
  }
  return likerString;
};

export default Likers;
