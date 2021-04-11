import React from "react";
import { motion } from "framer-motion";

import { pageAnimation } from "../animations/animation";

import bg from "../media/backgrounds/paper.jpg";

function Informations() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="informations"
    >
      <h2>Fontos tudni</h2>
      <img id="bg" src={bg} alt="bg" />
    </motion.div>
  );
}

export default Informations;
