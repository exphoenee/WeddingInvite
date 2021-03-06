import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";
import { OurImages, FlowerImages } from "../components/Images";

import { pageAnimation } from "../animations/animation";
import MainCarousel from "../components/MainCarousel";
import MediaContent from "../components/MediaContent";
import Quote from "../components/Quote";
import OurStory from "../components/OurStory";

function About() {
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
        <h2>Történetünk</h2>
        <Row>
          <Col lg={5} md={12}>
            <Quote />
          </Col>
          <Col lg={7} md={12}>
            <MainCarousel Images={OurImages} />
          </Col>
        </Row>
        <Row>
          <OurStory />
        </Row>
      </Container>
      <MediaContent />
      <div style={{ height: "300px" }}></div>
    </motion.div>
  );
}

export default About;
