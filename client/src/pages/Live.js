import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Iframe from "react-iframe";

import { pageAnimation } from "../animations/animation";
import Countdown from "../components/Countdown";
import WeddingDate from "../components/WeddingDate";
/*
* Normal link
https://www.youtube.com/watch?v=DDU-rZs-Ic4
* Embed link
https://www.youtube.com/embed/DDU-rZs-Ic4

<iframe width="560" height="315" src="https://www.youtube.com/embed/DDU-rZs-Ic4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
*/

const Live = () => {
  // Itt kell átyírni a test-et falsere és a video ID-t
  const test = true;
  const videoId = "DDU-rZs-Ic4";

  const url = "https://www.youtube.com/embed/" + videoId + "/?autoplay=1";

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
              marginTop: "25%",
              height: "100vh",
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
          url={url}
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
