import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

import { pageAnimation } from "../animations/animation";
import MainCarousel from "../components/MainCarousel";
import MediaContent from "../components/MediaContent";

function About() {
  return (
    <motion.div
      className="About mt-5"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Container className="mt-5">
        <Row>
          <Col lg={5} md={12}>
            <h2>Rólunk</h2>
          </Col>
          <Col lg={7} md={12}>
            <MainCarousel />
          </Col>
        </Row>
      </Container>
      <MediaContent />
    </motion.div>
  );
}

export default About;
