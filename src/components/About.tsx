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
          <p>
            Did adulting ever overwhelm you?
            <br />
            Did you ever find yourself expending unnecessary amounts of time and
            energy trying to understand taxes and health insurance?
          </p>
          Why is it that these crucial skills are never taught to us but the
          Pythagoras Theorem is? It’s ironic how so many students spend so much
          time, money and effort in school and yet are not aware of skills that
          are extremely essential in their lives. Skills such as managing your
          own finances or understanding how taxes work, are something that is
          never taught to us. At Initiate, we believe that crucial skills need
          to be taught crucially soon. To the same end, our mobile e-learning
          app is designed to help students learn essential adulting skills in
          the quickest and simplest manner possible. And not just that, we
          believe that learning needs to be made fun and is a process that needs
          to be revolutionized to suit the needs of today’s students. What makes
          it fun? All of our content is designed to be in the manner of a game.
          Users choose the topics that they want to learn about and essentially
          play through levels to understand the underlying concepts. Where is
          the revolution? Users have the ability to share the courses that they
          have completed with their friends on the app and can, in return, earn
          rewards and cashback. So you quite literally learn and earn
          simultaneously. With Initiate, you can prepare yourself for life in
          the best manner possible!
        </div>
      </Row>
    </Container>
  );
}
