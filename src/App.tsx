import React from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Team from "./components/Team";
import Recognition from "./components/Recognition";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <Team />
      <Recognition />
    </div>
  );
}

export default App;
