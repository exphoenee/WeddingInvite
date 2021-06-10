import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import {
  LandscapeWeddingImages,
  PortraitWeddingImages,
} from "../components/Images";

import { pageAnimation } from "../animations/animation";
import GalleryCarousel from "../components/GalleryCarousel";

function Gallery() {
  return (
    <motion.div
      className="About mt-5"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div style={{ height: "56px" }}></div>
      <Container className="mt-5">
        <h2>Fényképgaléria</h2>
        <Row className="landscape">
          <GalleryCarousel Images={LandscapeWeddingImages} />
        </Row>
        <Row className="portrait">
          <GalleryCarousel Images={PortraitWeddingImages} />
        </Row>
      </Container>
      <div style={{ height: "300px" }}></div>
    </motion.div>
  );
}

export default Gallery;
