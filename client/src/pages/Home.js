import React from "react";
import { motion } from "framer-motion";

import { pageAnimation } from "../animations/animation";

import Invite from "../components/Invite";

//import styles
import "../styles/app.scss";

function Home() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="Home"
    >
      <Invite />
    </motion.div>
  );
}

export default Home;
