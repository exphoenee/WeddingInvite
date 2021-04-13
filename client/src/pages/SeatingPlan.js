import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

import { useScroll } from "../components/useScroll";
import LazyImage from "../components/LazyImage";
import { pageAnimation, scrollReveal } from "../animations/animation";
import comps from "../components/LoadComputerImages";

import bg from "../media/backgrounds/old-1.jpg";

function SeatingPlan() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="seating-plan"
    >
      <img id="bg" src={bg} alt="bg" />
      <div style={{ height: "100px" }}></div>
      <Container className="mt-5">
        <h2>Ültetési rend:</h2>
        <p>
          A különleges helyzetre való tekintettel, speciális ültetési rendet
          dolgoztunk ki nektek, hogy mindenki biztonságban lehessen!
        </p>
        <p>
          Foglaljatok helyet a számítógépeitek, tabletjeitek vagy telefonjaitok
          előtt!
        </p>
        <CompRow comps={comps} />
      </Container>
    </motion.div>
  );
}

const CompRow = ({ comps }) => {
  return (
    <>
      {comps.map((row, rowIndex) => (
        <Row>
          <CompCol row={row} key={rowIndex} rowIndex={rowIndex}></CompCol>
        </Row>
      ))}
    </>
  );
};

const CompCol = ({ row, rowIndex }) => {
  const [element, controls] = useScroll();

  return (
    <>
      {row.map((col, colIndex) => (
        <Col key={colIndex}>
          <motion.div
            variants={scrollReveal}
            animate={controls}
            initial="hidden"
            ref={element}
            className="image-frame mt-5 mb-5"
          >
            <LazyImage
              src={col.img}
              alt={`comp-${colIndex}-${rowIndex}`}
              placeholderSrc={col.placeHolder}
            />
          </motion.div>
        </Col>
      ))}
    </>
  );
};

export default SeatingPlan;
