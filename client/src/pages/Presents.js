import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import { pageAnimation } from "../animations/animation";

import bg from "../media/backgrounds/damask-1.jpg";

import paypal from "../media/paypal/paypal.png";

import covid1 from "../media/covid/virus01.svg";
import covid2 from "../media/covid/virus02.svg";
import covid3 from "../media/covid/virus03.svg";
import covid4 from "../media/covid/virus04.svg";

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

  return (
    <motion.div id="presents">
      {game ? <div id="scoreboard">{`Lives: ${lives}`}</div> : ""}
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
        <h2>Ha szeretnél ajándékozni, itt megteheted...</h2>
        <p>...ha elég ügyes vagy kitartó vagy!</p>
        <img id="bg" src={bg} alt="bakcground" />
      </div>
      {showModal ? (
        <div id="messageModal">
          <h2>
            Köszönjük, hogy ilyen kitartó voltál, de semmit sem fogadunk el!
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
        <div id="gameover">
          <p>Game Over</p>
        </div>
      )}
    </motion.div>
  );
}

export default Presents;
