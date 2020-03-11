import React, { useState, useEffect } from "react";
import CarouselCardsTemplate from "./CarouselCards.jsx";
import apiFunctions from "../helpers/apiFunctions.js";
import Flickity from "react-flickity-component";

const Carousel = () => {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    apiFunctions.getPopular().then(popularBooks => {
      setPopular(popularBooks);
    });
  }, []);

  const Cards = () => {
    let options = { wrapAround: true, pageDots: false };
    return (
      <Flickity options={options}>
        {popular.map(book => {
          return <CarouselCardsTemplate book={book} />;
        })}
      </Flickity>
    );
  };

  return (
    <div className="gallery">
      <Cards />
    </div>
  );
};

export default Carousel;
