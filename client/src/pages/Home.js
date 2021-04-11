import React from "react";
import { motion } from "framer-motion";

import { pageAnimation } from "../animations/animation";

import Header from "../components/Header";

//import styles
import "../styles/app.scss";

function App() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="Home"
    >
      <Header />
    </motion.div>
  );
}

export default App;
