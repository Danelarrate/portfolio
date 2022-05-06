import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
function Navbar() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark">
        <div className="navbar-div">
          <div style={{ justifyContent: "center" }}>
            <NavLink
              className="navbar-brand"
              to="/"
              style={{ fontSize: "1.5vw" }}
            >
              Danel Arrate
            </NavLink>
          </div>
          <div style={{ justifyContent: "center" }}>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div style={{ justifyContent: "center", textAlign: "center" }}>
            <a
              style={{ fontSize: "1.5vw" }}
              className="navbar-brand"
              href="https://www.linkedin.com/in/danelarrate/"
              target="_blank"
              rel="noopener noreferrer"
              alt="linked in"
            >
              <AiFillLinkedin />
            </a>
            <a
              style={{ fontSize: "1.5vw" }}
              className="navbar-brand"
              href="https://github.com/Danelarrate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://wa.me/5491159065816"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: "1.5vw",
                color: "#25D366",
              }}
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
