import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Home,
  About,
  ContactUs,
  Projects,
} from "./Components/components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Projects" element={<Projects />}></Route>
      </Routes>
    </Router>
    <div className="area">
      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </React.StrictMode>
);
