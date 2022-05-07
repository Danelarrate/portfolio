import React, { useState, useEffect } from "react";
import data from "./data";
import "./Slider.css";
import { AiFillGithub } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";

const Slider = () => {
  const [proyectos] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = proyectos.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, proyectos]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);
  return (
    <section className="slider">
      <div className="card-section">
        {proyectos.map((actividad, actividadIndex) => {
          const { id, title, descripcion, image, giturl, url } = actividad;
          let position = "nextSlide";
          if (actividadIndex === index) {
            position = "activeSlide";
          }
          if (
            actividadIndex === index - 1 ||
            (index === 0 && actividadIndex === proyectos.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <div className="div-img-proyectos">
                <img src={image} alt={title} className="img-fluid"></img>
              </div>
              <div className="div-proyectos">
                <h4
                  style={{
                    color: "black",
                    fontSize: "2vw",
                    fontWeight: 700,
                  }}
                >
                  {title}
                </h4>
                <p style={{ color: "black", fontSize: "1.3vw" }}>
                  {descripcion}
                </p>
                <div style={{ display: "flex", margin: "8vh 0 " }}>
                  <button className="proyect-btn">
                    <a
                      style={{ fontSize: "1vw" }}
                      href={giturl}
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="git hub"
                    >
                      Ver Codigo
                      <AiFillGithub style={{ fontSize: "2vw" }} />
                    </a>
                  </button>
                  <button className="proyect-btn">
                    <a
                      style={{ fontSize: "1vw" }}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      alt="monitor"
                    >
                      Ver Proyecto
                      <FiMonitor style={{ fontSize: "2vw" }} />
                    </a>
                  </button>
                </div>
              </div>
            </article>
          );
        })}
        <button
          type="button"
          className="prev"
          onClick={() => setIndex(index - 1)}
        >
          <svg
            style={{ backgroundColor: "white", borderRadius: "0.2vw" }}
            xmlns="http://www.w3.org/2000/svg"
            width="2vw"
            height="4vh"
            fill="currentColor"
            className="bi bi-arrow-left-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
          </svg>
        </button>
        <button
          type="button"
          className="next"
          onClick={() => setIndex(index + 1)}
        >
          <svg
            style={{ backgroundColor: "white", borderRadius: "0.2vw" }}
            xmlns="http://www.w3.org/2000/svg"
            width="2vw"
            height="4vh"
            fill="currentColor"
            className="bi bi-arrow-right-square-fill"
            viewBox="0 0 16 16"
          >
            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Slider;
