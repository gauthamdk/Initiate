import React from "react";
import "../styles/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import gautham from "../assets/gautham.jpg";
import armaan from "../assets/armaan.jpg";

export default function Team() {
  return (
    <Container fluid className="team_color section p-5">
      <Row>
        <a id="team">
          <h1 className="team_heading pb-3">Team</h1>
        </a>
        <div className="d-flex justify-content-between">
          <div style={{ width: "250px" }} className="">
            <h3>Armaan Agrawal</h3>
            <img src={armaan} className="rounded-circle img-fluid" />
            <h5 className="pt-3">CEO & Co-Founder</h5>
          </div>
          <div style={{ width: "250px" }} className="">
            <h3>Gautham Dinesh</h3>
            <img src={gautham} className="rounded-circle img-fluid" />
            <h5 className="pt-3">CTO & Co-Founder</h5>
          </div>
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
