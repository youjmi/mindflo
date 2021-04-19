import React from "react";
import "./style.css";
import background from "./images/treetops.png"
import logo from "./images/MindFlofinal.png"


function Hero() {
  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center" style={{ backgroundImage: `url(${background})` }}>
       <div>
       <a href ="/"> <img src={logo} className="mindfloLogo" />  </a>
       </div>
    </section>
  );
}

export default Hero;

