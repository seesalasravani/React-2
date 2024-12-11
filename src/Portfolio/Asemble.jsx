import React from "react";
import Header from "../Portfolio/Header";
import Home from "../Portfolio/Home";
import Aboutus from "../Portfolio/Aboutus";
import Project5 from "../Portfolio/Project5";
import Contact from "../Portfolio/Contact";
import Footer from "../Portfolio/Footer";
import './App.css';  // Assuming you'll place the global styles here

function Asemble() {
  return (
    <div className="assemble">
      <Header />
      <Home />
      <Aboutus />
      <Project5 />
      <Contact />
      <Footer />
    </div>
  );
}

export default Asemble;
