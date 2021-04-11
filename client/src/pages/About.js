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
      <div style={{ height: "56px" }}></div>
      <Container className="mt-5">
        <h2>Történetünk</h2>
        <Row>
          <Col lg={5} md={12}>
            <figure className="quote mt-3 mb-3">
              <blockquote className="font-italic">
                <h5 className="mb-4">Falling Slowly</h5>
                <p>
                  “Nem ismerlek téged,
                  <br />
                  de jobban akarlak,
                  <br />
                  mint bármi mást.
                  <br />
                  A szavak rám zuhannak,
                  <br />
                  és bolonddá tesznek,
                  <br />
                  és nem tudok mit tenni.
                  <br />
                  És a játék, mit játszanak
                  <br />
                  sosem lesz több mint amit
                  <br />
                  önmaguknak jelentenek.
                  <br />
                  Fogd ezt a süllyedő hajót,
                  <br />
                  és vidd haza, míg van idő.
                  <br />
                  Emeld fel reményteli hango
                  <br />
                  d, mert a választás a tiéd.”
                  <br />
                </p>
              </blockquote>
              <figcaption className="text-right">
                Glen Hansard, Markéta Irglová
              </figcaption>
            </figure>
          </Col>
          <Col lg={7} md={12}>
            <MainCarousel />
          </Col>
        </Row>
        <Row>
          <h3>Egyszer volt, hol nem volt …</h3>
          <p>
            …a pécsi Mecseken túl ott, ahol a kismalac már nem túr-fúr, élet egy
            fiú és leány. Hosszú évekig kollégák voltak. Együtt dolgoztak,
            ebédeltek, kávézgattak, ha jó kedvük volt mókázgattak vagy a
            főnökökön bosszankodtak.
          </p>
          <p>
            Ám egy kora tavaszi délutánon valami megváltozott. A fiú és a lány
            érezték találkozniuk kell, mert valamit meg kell beszéljenek. A fiú
            váratlanul színt vallott, a lány ekkor még elutasító volt. „Barátok
            maradunk” – megállapodtak.
          </p>
          <p>
            Történetük igazán csak itt kezdődik. Regénybe illő gondolatokkal
            tűzdelt levelezések, éjszakai villanykörte csere, hosszú séták,
            izgalmas, őszinte és mély beszélgetések. Egyre többet mutattak meg
            magukból egymásnak, észrevétlen lebontva a köztük lévő falat. Majd a
            lány nyaralni ment, és valami felerősödött. Hiába földrajzi
            távolság, paktum vagy a tudatos elhatározás, a lány rádöbbent, hogy
            ez valami más. Ő pont az, aki senki más! Eldöntötték próbaidőszak
            alá vetik magukat és megnézik, hogyan működne a közösen irányított
            „gépezet”.
          </p>
          <p>
            Így történt, hogy 2016. szeptember 5-én, egy fülledt nyári estén már
            kéz a kézben együtt léptek a közös életük mezejére. Azóta társak, és
            partnerek a gyereknevelésben, munkában, egymás karrierjében,
            kalandban, viccben, a komoly dolgokban, a tanulásban… egyszóval az
            Életben. Mondanánk, hogy itt a vége… de csak most jön a kezdet.
          </p>
        </Row>
      </Container>
      <MediaContent />
      <div style={{ height: "300px" }}></div>
    </motion.div>
  );
}

export default About;
