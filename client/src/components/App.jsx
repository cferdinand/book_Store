import React, { useState, useEffect } from "react";
import Nav from "./Nav.jsx";
import Carousel from "./Carousel.jsx";
import apiFunctions from "../helpers/apiFunctions.js";
import Authors from "./Authors.jsx";
import BooksOfTheYear from "./BooksOfTheYear.jsx";
import Books from "./Books.jsx";

const App = () => {
  const [popular, setPopular] = useState([]);
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    let tempPopular = apiFunctions.getPopular();
    let tempBooks = apiFunctions.getBooks();
    let tempAuthors = apiFunctions.getAuthors();
    Promise.all([tempPopular, tempBooks, tempAuthors]).then(data => {
      setPopular(data[0]);
      setBooks(data[1]);
      setAuthors(data[2]);
    });
  }, []);

  return (
    <div className="app-container">
      <div className="nav">
        <Nav />
      </div>
      <div className="carousel">
        <Carousel popular={popular} />
      </div>
      <div className="main">
        <div className="side-highlights">
          <Authors authors={authors} />
          <BooksOfTheYear books={books.slice(0, 6)} />
        </div>
        <div className="books-view">
          <Books books={books} />
        </div>
      </div>
    </div>
  );
};

export default App;
