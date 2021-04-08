import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import MainCarousel from "../components/MainCarousel";

//import styles
import "../styles/app.scss";

function App() {
  return (
    <div className="Gallery">
      <Container>
        <Row>
          <Col></Col>
          <Col>
            <MainCarousel />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
