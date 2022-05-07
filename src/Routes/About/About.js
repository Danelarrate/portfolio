import React from "react";
import "./about.css";
import { AiFillLinkedin, AiFillHtml5, AiFillGithub } from "react-icons/ai";
import { FaReact, FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";

function About() {
  const iconStyle = {
    margin: "2.5vh 2.5vw 0vh 2.5vw",
    height: "10vh",
    width: "5vw",
    color: "black",
  };

  return (
    <div className="about">
      <div className="about-divs">
        <h2 className="text-center">Sobre mi</h2>
        <p className="p-2 text-center">
          Empecé en el ámbito de la programación a través de un curso de HTML 5.
          Desde el principio, me centré en desarrollar proyectos propios y
          aprender otros lenguajes complementarios.<br></br> Soy una persona muy
          curiosa, suelo investigar e informarse continuamente. Además, me
          destaco por ser responsable y centrado en mis objetivos.<br></br> En
          el ámbito profesional me especializo en front-end, pero aspiro a
          desenvolverme como desarrollador fullstack.
        </p>
        <div className="text-center d-flex justify-content-center gap-2 ">
          <a
            href="https://www.linkedin.com/in/danelarrate/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-dark"
              style={{
                color: "white",
                textAlign: "center",
                justifyContent: "center",
                border: "none",
                borderRadius: "0.3vw",
                fontSize: "1.5vw",
                width: "10vw",
              }}
            >
              Ver Perfil
              <AiFillLinkedin
                style={{
                  height: "5vh",
                  width: "2.5vw",
                  color: "white",
                }}
              />
            </button>
          </a>
        </div>
      </div>
      <div className="about-divs">
        <h2>Skills</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <AiFillHtml5 style={iconStyle} />
              <p>HTML</p>
            </div>
            <div className="col-sm">
              <AiFillGithub style={iconStyle} />
              <p>Github</p>
            </div>
            <div className="col-sm">
              <FaReact style={iconStyle} />
              <p>React</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <FaCss3Alt style={iconStyle} />
              <p>CSS</p>
            </div>
            <div className="col-sm">
              <DiJavascript1 style={iconStyle} />
              <p>Javascript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
