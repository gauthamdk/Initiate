import React from "react";
import "../styles/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import innovention from "../assets/innovention.webp";

export default function Recognition() {
  return (
    <Container fluid className="recog_color section p-5">
      <Row>
        <h1 className="pb-3 pt-5">Recognition</h1>
        <div className="d-flex justify-content-between">
          <div style={{ width: "300px" }}>
            <h3>NYUAD Innovention</h3>
            <img className="img-fluid" src={innovention} />
          </div>
          <div style={{ width: "300px" }}>
            <h3>NYU Bootcamp</h3>
            <img className="img-fluid" src={innovention} />
          </div>
        </div>
      </Row>
      <div className="team_waves">
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
