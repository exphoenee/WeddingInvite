import React from "react";
import { Link } from "react-router-dom";

import Countdown from "./Countdown";
import Container from "react-bootstrap/Container";

const Invite = () => {
  return (
    <div className="header">
      <Container>
        <div className="title-text">
          <h1>Adrienn és Viktor</h1>
          <h2>Szeretettel meghív titeket esküvőjére</h2>
          <h2>melynek helyszíne a notebookod képernyője</h2>
          <h3>(Nekünk Pécsett a Boldogság házában)</h3>
          <h2>Időpontja 2021. 04. 24. 16:00</h2>
          <Countdown />
          <Link id="details-btn" className="btn primary-btn" to="/Informations">
            Részletek
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Invite;
