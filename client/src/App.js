import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainMenu from "./components/MainMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import SeatingPlan from "./pages/SeatingPlan";
import Informations from "./pages/Informations";
import Live from "./pages/Live";
import Gallery from "./pages/Gallery";
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
            <Route path="/about" component={About} />
            <Route path="/informations" component={Informations} />
            <Route path="/seatingplan" component={SeatingPlan} />
            <Route path="/live" component={Live} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/presents" component={Presents} />
          </Switch>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
