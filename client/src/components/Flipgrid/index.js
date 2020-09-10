import React from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function Flipgrid() {
  return (
      <div className="cont">
          <div className="row title" id="flip">
        <h3>Flip Grid</h3>
      </div>
    <Container fluid className="justify-content-md-center">
      <Row className="justify-content-md-center">
        <Card>
          <div style={{ width: 600, height: "auto" }}>
            <ResponsiveEmbed aspectRatio="1by1">
              <embed src="https://flipgrid.com/+williams0894?embed=true" />
            </ResponsiveEmbed>
          </div>
        </Card>
        <Card>
          <div style={{ width: 600, height: "auto" }}>
            <ResponsiveEmbed aspectRatio="1by1">
              <embed   src="https://flipgrid.com/+williams0405?embed=true" />
            </ResponsiveEmbed>
          </div>
        </Card>
      </Row>
    </Container>
    </div>
  );
}

export default Flipgrid;