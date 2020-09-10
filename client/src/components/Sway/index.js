import React from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./style.css";

function Sway() {
  return (
    <div className="cont">
      <div className="row title" id="sway">
        <h3>Sway</h3>
      </div>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Card>
            <div style={{ width: 600, height: "auto" }}>
              <ResponsiveEmbed aspectRatio="1by1">
                <embed src="https://sway.office.com/s/TWJe93gvJQBcNuxz/embed" />
              </ResponsiveEmbed>
            </div>
          </Card>
          <Card>
            <div style={{ width: 600, height: "auto" }}>
              <ResponsiveEmbed aspectRatio="1by1">
                <embed src="https://sway.office.com/s/AL6dHXvmZgIetHQ4/embed" />
              </ResponsiveEmbed>
            </div>
          </Card>
        </Row>
        <Row className="justify-content-md-center">
          <Card>
            <div style={{ width: 600, height: "auto" }}>
              <ResponsiveEmbed aspectRatio="1by1">
                <embed src="https://sway.office.com/s/RA8Km3RT6TTHqCil/embed" />
              </ResponsiveEmbed>
            </div>
          </Card>
          <Card>
            <div style={{ width: 600, height: "auto" }}>
              <ResponsiveEmbed aspectRatio="1by1">
                <embed src="https://sway.com/s/DvT2whcNnmGx2kVI/embed" />
              </ResponsiveEmbed>
            </div>
          </Card>
        </Row>
        <Row className="justify-content-md-center">
          <Card>
            <div style={{ width: 600, height: "auto" }}>
              <ResponsiveEmbed aspectRatio="1by1">
                <embed src="https://sway.com/s/w0z5s45mFljADNiY/embed" />
              </ResponsiveEmbed>
            </div>
          </Card>
        </Row>
      </Container>
    </div>
    // <Container fluid>
    //   <Row className="justify-content-md-center">
    //     <Col sm={6}>
    //       <div style={{ width: 660, height: "auto" }}>
    //         <ResponsiveEmbed aspectRatio="16by9">
    //           <embed type="image/svg+xml" src="https://sway.office.com/s/AL6dHXvmZgIetHQ4/embed" />
    //         </ResponsiveEmbed>
    //       </div>
    //     </Col>
    //     <Col sm={6}>
    //       <div style={{ width: 660, height: "auto" }}>
    //         <ResponsiveEmbed aspectRatio="16by9">
    //           <embed type="image/svg+xml" src="https://sway.office.com/s/AL6dHXvmZgIetHQ4/embed" />
    //         </ResponsiveEmbed>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default Sway;
