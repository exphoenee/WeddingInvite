import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Iframe from "react-iframe";

import { pageAnimation } from "../animations/animation";
import Countdown from "../components/Countdown";
import { WeddingDate } from "../settings";
import { LiveUrl, test } from "../settings";

const Live = () => {
  const started = () => {
    const WeddingDateTest = +new Date(`4/12/2021 16:00:00`);

    let CurrentTimeLeft = (test ? WeddingDateTest : WeddingDate) - +new Date();
    return CurrentTimeLeft / 1000 / 60 / 60 / 24 < 1;
  };

  const [timeLeft, setTimeLeft] = useState(started());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(started());
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  });

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={
        timeLeft
          ? { height: "100vh", backgroundColor: "black" }
          : {
              marginTop: "15%",
              backgroundColor: "white",
            }
      }
      className="live"
    >
      <div style={{ height: "56px" }}></div>

      {timeLeft ? (
        <Iframe
          width="100%"
          height="90%"
          url={LiveUrl}
          id="live"
          display="initial"
          position="relative"
          allow="fullscreen"
          playing={true}
        />
      ) : (
        <Countdown />
      )}
    </motion.div>
  );
};

export default Live;
