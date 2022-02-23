import React from "react";
import "../styles/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <Container fluid className="about_color section p-5">
      <Row className="d-flex justify-content-start">
        <Col xs={8}>
          <a id="home">
            <h1 className="pb-3 text-start">Why Initiate?</h1>
          </a>
          <div className="text-start w-75">
            <p>
              Did <b>adulting</b> ever overwhelm you?
              <br />
              Did you ever find yourself expending unnecessary amounts of time
              and energy trying to understand <b>taxes</b> and{" "}
              <b>health insurance</b>?
            </p>
            <p>
              It’s ironic how so many students spend so much time, money and
              effort in school and yet are not aware of skills that are{" "}
              <b>exteremely essential</b> in their lives.
            </p>
            <p>
              Skills such as managing your own finances or understanding how
              taxes work, are never taught to us.
            </p>
            <p>
              At <b>Initiate</b>, we believe that <b>crucial skills</b> need to
              be taught <b>crucially soon</b>.
            </p>
            <p>
              To the same end, our <b>mobile e-learning app</b> is designed to
              help students learn essential adulting skills in the quickest and
              simplest manner possible.
            </p>
            <p>
              With our <b>gamified</b> lessons and quizzes, you can soar through
              important life skills and <b>earn</b> points.
            </p>
            <p>
              Compete with friends, and earn rewards and cashback. So you quite
              literally learn and earn!
            </p>
            <p>
              With <b>Initiate</b>, you can prepare yourself for life in the
              best manner possible!
            </p>
          </div>
        </Col>
      </Row>
      <div className="navbar_waves">
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
