import React from "react";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

function Youtube() {
  return (
      <div className="cont">
          <div className="row title" id="youtube">
        <h3>Youtube</h3>
      </div>
    <Container fluid className="justify-content-md-center">
      <Row className="justify-content-md-center">
        <Card>
          <div style={{ width: 600, height: "auto" }}>
            <ResponsiveEmbed aspectRatio="1by1">
              <embed src="https://www.youtube.com/embed/_i5pZLj84yI" />
            </ResponsiveEmbed>
          </div>
        </Card>
        <Card>
          <div style={{ width: 600, height: "auto" }}>
            <ResponsiveEmbed aspectRatio="1by1">
              <embed   src="https://www.youtube.com/embed/cazxKZLPri4" />
            </ResponsiveEmbed>
          </div>
        </Card>
      </Row>
    </Container>
    </div>
  );
}

export default Youtube;