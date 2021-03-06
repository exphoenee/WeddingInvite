import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";

import { pageAnimation, fade } from "../animations/animation";

import bg from "../media/backgrounds/texture1.jpg";

import paypal from "../media/paypal/paypal.png";

import covid1 from "../media/covid/virus01.svg";
import covid2 from "../media/covid/virus02.svg";
import covid3 from "../media/covid/virus03.svg";
import covid4 from "../media/covid/virus04.svg";
import heart from "../media/covid/heart.png";

function Presents() {
  const [lives, setLives] = useState(3);
  const [game, setGame] = useState(false);

  const flyingButton = useRef();
  const virus1 = useRef();
  const virus2 = useRef();
  const virus3 = useRef();
  const virus4 = useRef();

  const viruses = [virus1, virus2, virus3, virus4];

  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    setGame(true);

    function getNewCoords() {
      let newX = Math.floor(Math.random() * window.innerWidth);
      let newY = Math.floor(Math.random() * window.innerHeight);

      if (newY < 100) {
        newY = 100;
      }
      if (newY > window.innerHeight - 100) {
        newY = window.innerHeight - 100;
      }
      if (newX < 100) {
        newX = 100;
      }
      if (newX > window.innerWidth - 100) {
        newX = window.innerWidth - 100;
      }
      return { x: newX + "px", y: newY + "px" };
    }

    const NewCords = getNewCoords();
    flyingButton.current.style.left = NewCords.x;
    flyingButton.current.style.top = NewCords.y;

    viruses.forEach((virus) => {
      let NewVirusCords = getNewCoords();
      virus.current.style.opacity = 1;
      virus.current.style.left = NewVirusCords.x;
      virus.current.style.top = NewVirusCords.y;
    });
  };

  //useEffect(() => {}, [showModal]);

  const hanldeClick = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };

  const handleVirus = () => {
    setLives(lives - 1);
    if (lives <= 0) setGame(false);
  };

  const Heart = ({ alt }) => {
    return (
      <img
        alt={alt}
        style={{ width: "50px", height: "50px", padding: "2px" }}
        src={heart}
      />
    );
  };

  const Hearts = () => {
    const Hearts = [];
    for (let i = 0; i < lives; i++) {
      Hearts.push(<Heart alt={`heart-${i}`} />);
    }
    return Hearts;
  };

  return (
    <motion.div id="presents">
      <BrowserView>
        {game ? (
          <div id="scoreboard">
            <Hearts />
          </div>
        ) : (
          ""
        )}
        <img
          ref={virus1}
          onMouseEnter={handleVirus}
          className="covid"
          src={covid1}
          alt="covid1"
        />
        <img
          ref={virus2}
          onMouseEnter={handleVirus}
          className="covid"
          src={covid2}
          alt="covid2"
        />
        <img
          ref={virus3}
          onMouseEnter={handleVirus}
          className="covid"
          src={covid3}
          alt="covid3"
        />
        <img
          ref={virus4}
          onMouseEnter={handleVirus}
          className="covid"
          src={covid4}
          alt="covid4"
        />
        <div>
          <h2>Ha szeretn??l aj??nd??kozni, itt megteheted...</h2>
          <p>...ha el??g ??gyes ??s kitart?? vagy!</p>
          <img id="bg" src={bg} alt="bakcground" />
        </div>
        {showModal ? (
          <div id="messageModal">
            <h2>
              K??sz??nj??k, hogy ilyen kitart?? volt??l, de semmit sem fogadunk el!
            </h2>
          </div>
        ) : (
          ""
        )}
        {lives > 0 ? (
          <div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
            ref={flyingButton}
            onMouseEnter={handleMouseEnter}
            onClick={hanldeClick}
            className="flying-button"
          >
            <img src={paypal} alt="paypal" />
          </div>
        ) : (
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            id="gameover"
          >
            <p>Game Over</p>
          </motion.div>
        )}
      </BrowserView>
      <MobileView>
        <h2>Ez a funkci??, csak asztali sz??m??t??g??pen m??k??dik!</h2>
      </MobileView>
    </motion.div>
  );
}

export default Presents;
