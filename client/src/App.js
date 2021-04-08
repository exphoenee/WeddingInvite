import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Gallery from "./pages/Gallery";
import MainMenu from "./components/MainMenu";

//import styles
import "./styles/app.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainMenu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" exact component={Gallery} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
