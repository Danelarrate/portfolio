import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <main className="home">
      <h1>
        Hi,<br></br>I´m Danel,<br></br>web developer
      </h1>
      <p>Front End Developer</p>
      <div className="wrapper">
        <NavLink to="/contact">
          <button className="fancy-btn contact-button">Contact me!</button>
        </NavLink>
      </div>
    </main>
  );
}

export default Home;
