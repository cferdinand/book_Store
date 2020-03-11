import React from "react";

const Authors = ({ authors }) => {
  const AuthorsList = () => {
    return authors.map(author => {
      return (
        <div className="author-name-photo-holder">
          <img src={author.photo} className="author-photo small-icon" />
          <span className="author-name">{author.author_name}</span>
        </div>
      );
    });
  };
  return (
    <div className="authors-container">
      <h4>Author of the week</h4>
      <AuthorsList />
    </div>
  );
};

export default Authors;
