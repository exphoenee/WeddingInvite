import React from "react";

import Countdown from "./Countdown";

const Header = () => {
  return (
    <div className="header">
      <div className="title-text">
        <h1>Adrienn és Viktor</h1>
        <h2>Szeretettel meghív titeket esküvőjére</h2>
        <h2>melynek helyszíen a notebookod képernyője</h2>
        <h3>(Nekünk Pécsett a Boldogság házában)</h3>
        <h2>Időpontja 2021. 04. 24. 16:00</h2>
        <Countdown />
      </div>
    </div>
  );
};

export default Header;
