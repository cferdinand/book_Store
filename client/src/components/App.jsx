import React, { useState } from "react";
import Nav from "./Nav.jsx";

const App = () => {
  const [popular, setPopular] = useState({});

  return (
    <div className="app-container">
      <div className="nav">
        <Nav />
      </div>
      <div className="carousel"></div>
    </div>
  );
};

export default App;
