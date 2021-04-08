import React from "react";
import Carousel from "react-bootstrap/Carousel";

import img001 from "../media/carousel/carousel-001.webp";
import img002 from "../media/carousel/carousel-002.webp";
import img003 from "../media/carousel/carousel-003.webp";
import img004 from "../media/carousel/carousel-004.webp";
import img005 from "../media/carousel/carousel-005.webp";
import img006 from "../media/carousel/carousel-006.webp";
import img007 from "../media/carousel/carousel-007.webp";
import img008 from "../media/carousel/carousel-008.webp";
import img009 from "../media/carousel/carousel-009.webp";
import img010 from "../media/carousel/carousel-010.webp";
import img011 from "../media/carousel/carousel-011.webp";
import img012 from "../media/carousel/carousel-012.webp";
import img013 from "../media/carousel/carousel-013.webp";
import img014 from "../media/carousel/carousel-014.webp";
import img015 from "../media/carousel/carousel-015.webp";
import img016 from "../media/carousel/carousel-016.webp";
import img017 from "../media/carousel/carousel-017.webp";
import img018 from "../media/carousel/carousel-018.webp";
import img019 from "../media/carousel/carousel-019.webp";
import img020 from "../media/carousel/carousel-020.webp";
import img021 from "../media/carousel/carousel-021.webp";
import img022 from "../media/carousel/carousel-022.webp";
import img023 from "../media/carousel/carousel-023.webp";
import img024 from "../media/carousel/carousel-024.webp";

const images = [
  img001,
  img002,
  img003,
  img004,
  img005,
  img006,
  img007,
  img008,
  img009,
  img010,
  img011,
  img012,
  img013,
  img014,
  img015,
  img016,
  img017,
  img018,
  img019,
  img020,
  img021,
  img022,
  img023,
  img024,
];

const MainCarousel = () => {
  return (
    <Carousel className="main-carousel">
      {images.map((img) => {
        return (
          <Carousel.Item interval={2000} key={Math.random() * 200}>
            <img src={img} alt="ourlifes" />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default MainCarousel;
