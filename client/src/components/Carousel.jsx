import React from "react";
import CarouselCardsTemplate from "./CarouselCards.jsx";
import Flickity from "react-flickity-component";

const Carousel = ({ popular }) => {
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
