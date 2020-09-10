import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

function Footer() {
  return (
    <Navbar id="footer">
      <Navbar.Brand>
        <a class="foot-link" id="email" href="mailto:abbywilliams503@gmail.com">
          Email Me: AbbyWilliams503@gmail.com
        </a>
      </Navbar.Brand>
      <Nav className="ml-auto">
        <a
          className="foot-icon"
          href="https://www.linkedin.com/in/abby-williams-b36854b4"
          target="_blank"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          className="foot-icon"
          href="https://twitter.com/msaesnw?s=20"
          target="_blank"
        >
          <i class="fab fa-twitter-square"></i>
        </a>
      </Nav>
    </Navbar>
  );
}

export default Footer;
