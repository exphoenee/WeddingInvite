import React from "react";
import { Link } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "bootstrap/dist/css/bootstrap.min.css";

const MainMenu = (setRouter) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">
            Meghívó
          </Link>
          <Link className="nav-link" to="/about">
            Történetünk
          </Link>
          <Link className="nav-link" to="/informations">
            Információk
          </Link>
          <Link className="nav-link" to="/seatingplan">
            Ültetési rend
          </Link>
          <Link className="nav-link" to="/live">
            Live
          </Link>
          <Link className="nav-link" to="/presents">
            Ajándékozás
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainMenu;
