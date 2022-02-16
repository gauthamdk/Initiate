import React from "react";
import "../styles/Team.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Team() {
  return (
    <Container fluid className="bg-team">
      <Row>
        <h1>Team</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis
          voluptates error non quo nulla saepe sed ratione, ducimus sequi labore
          pariatur quae alias repellat consectetur officiis deleniti vero ex!
        </div>
      </Row>
    </Container>
  );
}
