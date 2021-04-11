import React from "react";
import { motion } from "framer-motion";

import { pageAnimation } from "../animations/animation";

function Informations() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="informations"
    ></motion.div>
  );
}

export default Informations;
