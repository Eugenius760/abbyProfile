import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

function Navi() {
  return (
    <Navbar className="justify-content-center" id="navPro">
      <Nav className="justify-content-center">
        <Nav.Item>
          <a className="navName" href="/">Abby Williams</a>
        </Nav.Item>
        <Nav.Item className="namePlate1">-</Nav.Item>
        <Nav.Item className="namePlate1">Projects</Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default Navi;
