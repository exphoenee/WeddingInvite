import React from "react";
import { Link } from "react-router-dom";

import Countdown from "./Countdown";
import LazyImage from "../components/LazyImage";

import bg from "../media/backgrounds/img02.webp";
import bgtmb from "../media/backgrounds/thumbs/img02_tmb.webp";

const Invite = () => {
  return (
    <div className="invite">
      <LazyImage id="bg2" src={bg} alt="bg" placeholderSrc={bgtmb} />
      <div className="title-text">
        <h1>Adrienn és Viktor</h1>
        <h2>Szeretettel meghívunk</h2>
        <h2>Téged és kedves családodat</h2>
        <h2>2021. 04. 24. 16:00-kor</h2>
        <h3>tartandó polgári esküvőnk</h3>
        <h3>online délutáni matinéjára</h3>
        <Countdown />
        <Link id="details-btn" className="btn primary-btn" to="/Informations">
          Részletek
        </Link>
      </div>
    </div>
  );
};

export default Invite;
