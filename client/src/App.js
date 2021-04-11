import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainMenu from "./components/MainMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import SeatingPlan from "./pages/SeatingPlan";
import Informations from "./pages/Informations";
import Presents from "./pages/Presents";

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
            <Route path="/informations" exact component={Informations} />
            <Route path="/seatingplan" exact component={SeatingPlan} />
            <Route path="/presents" exact component={Presents} />
          </Switch>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
