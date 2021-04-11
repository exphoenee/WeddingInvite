import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

import { pageAnimation } from "../animations/animation";
import MainCarousel from "../components/MainCarousel";

//import styles
import "../styles/app.scss";

function App() {
  return (
    <motion.div
      className="Gallery"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <MainCarousel />
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default App;
