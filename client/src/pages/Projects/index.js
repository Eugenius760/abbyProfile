import React from "react";
import Navi from "../../components/Navbar/index";
import Sway from "../../components/Sway/index";
import "./style.css";
import Flipgrid from "../../components/Flipgrid";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Youtube from "../../components/Youtube/index";
import Footer from "../../components/Footer/index";

function Projects() {
  return (
    <div>
      <Navi />
      <Navbar className="justify-content-center scrollNav" sticky="top">
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link className="link" href="#sway">
              Sway
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link" href="#flip">
              Flip Grid
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link" href="#youtube">
              YouTube
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="link" href="#navPro">
              Back to Top
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
      <Sway />
      <Flipgrid />
      <Youtube />
      <Footer />
    </div>
  );
}

export default Projects;
