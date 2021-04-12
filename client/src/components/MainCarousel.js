import React from "react";
import Carousel from "react-bootstrap/Carousel";

const MainCarousel = ({ Images }) => {
  return (
    <Carousel className="main-carousel">
      {Images.map((img) => {
        return (
          <Carousel.Item interval={4000} key={Math.random() * 200}>
            <img src={img} alt="ourlifes" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default MainCarousel;
