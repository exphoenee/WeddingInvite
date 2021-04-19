import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import LazyImage from "../components/LazyImage";
import { YoutubeUrl } from "../settings";

import { pageAnimation } from "../animations/animation";

import bg from "../media/backgrounds/paper.webp";
import bgtmb from "../media/backgrounds/thumbs/paper_tmb.webp";

import covid1 from "../media/covid/01.svg";
import covid2 from "../media/covid/02.svg";
import covid3 from "../media/covid/03.svg";
import covid5 from "../media/covid/05.svg";
import covid6 from "../media/covid/06.svg";

import niceplace from "../media/decor/img02.webp";
import niceplacetmb from "../media/decor/thumbs/img02_tmb.webp";
import flower from "../media/decor/img01.webp";
import flowertmb from "../media/decor/thumbs/img01_tmb.webp";

import youtubeIcon from "../media/icons/youtube.png";
import weddingIcon from "../media/icons/wedding.png";

function Informations() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="informations"
      style={{ marginBottom: "220px" }}
    >
      <img id="bg" src={bg} alt="bg" />
      <div style={{ height: "156px" }}></div>
      <Container>
        <h2>Fontos tudnivalók</h2>
        <p>
          A jelenlegi járványhelyzetre való tekintettel csak kis létszámú
          vendéget fogadhatnak a hivatalok és a Boldogság Háza is. Egészen
          pontosan 10 ember lehet velünk a ceremónián, és ebbe már a fotós is
          bele tartozik. Ezért az élő közvetítést a saját számítógépein nézhetik azok, akik nem lehetnek jelen.
        </p>
        <p>
          Az ifjú pár tisztelettel kéri, hogy aki egy kicsit is rosszul érzi
          magát, az maradjon otthon, és úgy kövesse az élő közvetítést!
        </p>
        <Row className="justify-content-center mb-5 mt-5">
          <img style={{ width: "50px" }} src={covid5} alt="covid5" />
          <img style={{ width: "50px" }} src={covid6} alt="covid6" />
          <img style={{ width: "50px" }} src={covid3} alt="covid3" />
          <img style={{ width: "50px" }} src={covid1} alt="covid1" />
          <img style={{ width: "50px" }} src={covid2} alt="covid2" />
        </Row>
        <p>
          Az egész ceremónia 3 kamerával lesz streamelve youtube-on keresztül.
          Kétféle lehetőség is van, hogy kövessétek az élő adást: a honalap "Élő
          közvetítés" aloldalán vagy közvetlenül a Youtube-on. Az élő közvetítés
          linkje 24 órával a ceremónia megkezdése előtt lesz számunkra is
          ismert, amelyet itt is közzé fogunk tenni. Lásd a lenti kép alján a
          két gombot.
        </p>
        <div className="d-flex flex-column position-relative">
          <LazyImage
            id="weddingplace"
            src={niceplace}
            placeholderSrc={niceplacetmb}
            alt="niceplace"
          />
          <Row
            id="live-buttons"
            className="justify-content-center align-items-center"
          >
            <Link className="myButton" to="/live">
              <img
                style={{ width: "33px", marginRight: "10px" }}
                src={weddingIcon}
                alt="weddingIcon"
              />
              Itt az oldalon
            </Link>
            <p style={{ margin: "0 25px 0 25px", color: "white" }}>vagy</p>
            <a className="myButton" target="_blank" href={YoutubeUrl}>
              <img
                style={{ width: "33px", marginRight: "10px" }}
                src={youtubeIcon}
                alt="youtubeIcon"
              />
              Youtube-on
            </a>
          </Row>
        </div>
        <h2>Részletek</h2>
        <Row>
          <Col md={6}>
            <p>
              Vendégek és az ifjú pár érkezése a helyszínre: 15 perccel kezdés
              előtt. A járvány miatt előbb senkit nem tudnak beengedni az
              épületbe, csak akkor, ha az előző esküvő résztvevői kijöttek! Az
              épületbe belépve kézfertőtlenítésre kerül sor. Az épületbe csak
              szájmaszkban lehet belépni, amit a terembe felérve, aki szeretné
              leveheti.
            </p>
            <p>
              Behajtási engedélyt lehet vásárolni a 48-as téri Shell
              benzinkúton.
            </p>
          </Col>
          <Col md={6}>
            <LazyImage
              src={flower}
              placeholderSrc={flowertmb}
              style={{
                display: "block",
                margin: "0 auto 0 auto",
                width: "70%",
                borderRadius: "10px",
                boxShadow: "1px 2px 5px gray",
              }}
              alt="niceplace"
            />
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Informations;
