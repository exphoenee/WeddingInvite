import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { motion } from "framer-motion";

import { pageAnimation } from "../animations/animation";
//import styles
import "../styles/app.scss";

import comp01 from "../media/computers/comp01.jpg";
import comp02 from "../media/computers/comp02.jpg";
import comp03 from "../media/computers/comp03.jpg";
import comp04 from "../media/computers/comp04.jpg";
import comp05 from "../media/computers/comp05.jpg";
import comp06 from "../media/computers/comp06.jpg";
import comp07 from "../media/computers/comp07.jpg";
import comp08 from "../media/computers/comp08.jpg";
import comp09 from "../media/computers/comp09.jpg";
import comp10 from "../media/computers/comp10.jpg";
import comp11 from "../media/computers/comp11.jpg";
import comp12 from "../media/computers/comp12.jpg";
import comp13 from "../media/computers/comp13.jpg";
import comp14 from "../media/computers/comp14.jpg";

function seatingplan() {
  const comps = [
    [comp01, comp02],
    [comp03, comp04],
    [comp05, comp06],
    [comp07, comp08],
    [comp09, comp10],
    [comp11, comp12],
    [comp13, comp14],
  ];

  return (
    <div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="seating-plan"
    >
      <Container className="mt-5">
        <CompRow comps={comps} />
      </Container>
    </div>
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
  console.log(row);
  return (
    <>
      {row.map((col, colIndex) => (
        <Col key={colIndex}>
          <div className="image-frame mt-5 mb-5">
            <img src={col} alt={`comp-${colIndex}-${rowIndex}`} />
          </div>
        </Col>
      ))}
    </>
  );
};

export default seatingplan;
