import React from "react";
import "../styles/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function About() {
  return (
    <Container fluid className="about_color section p-5">
      <Row>
        <h1>Why Initiate</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis
          voluptates error non quo nulla saepe sed ratione, ducimus sequi labore
          pariatur quae alias repellat consectetur officiis deleniti vero ex!
        </div>
      </Row>
    </Container>
  );
}
