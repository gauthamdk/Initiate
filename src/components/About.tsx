import React from "react";
import "../styles/App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function About() {
  return (
    <Container fluid className="about_color section p-5">
      <Row className="d-flex justify-content-center">
        <a id="home">
          <h1 className="pb-3">Why Initiate</h1>
        </a>
        <div className="text-center w-75">
          <p>
            Did <b>adulting</b> ever overwhelm you?
            <br />
            Did you ever find yourself expending unnecessary amounts of time and
            energy trying to understand <b>taxes</b> and <b>health insurance</b>
            ?
          </p>
          <p>
            It’s ironic how so many students spend so much time, money and
            effort in school and yet are not aware of skills that are{" "}
            <b>exteremely essential</b> in their lives.
          </p>
          <p>
            Skills such as managing your own finances or understanding how taxes
            work, are never taught to us.
          </p>
          <p>
            At <b>Initiate</b>, we believe that <b>crucial skills</b> need to be
            taught <b>crucially soon</b>.
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
            With <b>Initiate</b>, you can prepare yourself for life in the best
            manner possible!
          </p>
        </div>
      </Row>
    </Container>
  );
}
