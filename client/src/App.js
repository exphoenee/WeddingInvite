import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import SeatingPlan from "./pages/SeatingPlan";
import Informations from "./pages/Informations";
import About from "./pages/About";
import MainMenu from "./components/MainMenu";

//import styles
import "./styles/app.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainMenu />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/info" exact component={Informations} />
            <Route path="/seatingplan" exact component={SeatingPlan} />
          </Switch>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
