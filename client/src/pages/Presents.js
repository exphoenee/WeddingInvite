import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { pageAnimation } from "../animations/animation";

import paypal from "../media/paypal/paypal.png";

function Presents() {
  const flyingButton = useRef();
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
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

    flyingButton.current.style.left = newX + "px";
    flyingButton.current.style.top = newY + "px";
  };

  useEffect(() => {}, [showModal]);

  const hanldeClick = () => {
    console.log("Click");
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 5000);
  };

  return (
    <motion.div id="presents">
      <div>
        <h2>Ha szeretnél ajándékozni, itt megteheted...</h2>
        <p>he elég ügyes vagy kitartó vagy!</p>
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
    </motion.div>
  );
}

export default Presents;
