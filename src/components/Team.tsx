import React from "react";
import "../styles/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function Team() {
  return (
    <Container fluid className="team_color section p-5">
      <Row>
        <h1>Team</h1>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse nobis
          voluptates error non quo nulla saepe sed ratione, ducimus sequi labore
          pariatur quae alias repellat consectetur officiis deleniti vero ex!
        </div>
      </Row>
      <div className="about_waves">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Container>
  );
}
