import React from "react";
import "./style.css";
import background from "./images/treetops.png"
import logo from "./images/MindFlofinal.png"
import { Button } from "react-bootstrap";

function Hero() {
  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center" style={{ backgroundImage: `url(${background})` }}>
        <img src={logo}/>
        
    </section>
  );
}

export default Hero;

//style={{ backgroundImage: `url(${background})` }}