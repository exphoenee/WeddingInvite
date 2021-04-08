import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Gallery from "./pages/Gallery";

//import styles
import "./styles/app.scss";

function App() {
  const [router, setRouter] = useState();

  return (
    <div className="App">
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
