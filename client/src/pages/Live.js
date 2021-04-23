import React from "react";
import { motion } from "framer-motion";
import Iframe from "react-iframe";

import { pageAnimation } from "../animations/animation";
import { LiveUrl } from "../settings";

const Live = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ height: "100vh", backgroundColor: "black" }}
      className="live"
    >
      <div className="media-container">
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
      </div>
    </motion.div>
  );
};

export default Live;
