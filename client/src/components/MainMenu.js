import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "bootstrap/dist/css/bootstrap.min.css";

const MainMenu = (setRouter) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            onClick={() => {
              setRouter("home");
            }}
            href="#features"
          >
            Home
          </Nav.Link>
          <Nav.Link href="#details">Információk</Nav.Link>
          <Nav.Link href="#gallery">Galéria</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainMenu;
