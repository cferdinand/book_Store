import React from "react";
import Nav from "./Nav.jsx";
import Carousel from "./Carousel.jsx";

const App = () => {
  return (
    <div className="app-container">
      <div className="nav">
        <Nav />
      </div>
      <div className="carousel">
        <Carousel />
      </div>
    </div>
  );
};

export default App;
