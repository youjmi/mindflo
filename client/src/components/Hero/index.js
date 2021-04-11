import React from "react";
import "./style.css";
import background from "./images/logorocks.png"
import { Button } from "react-bootstrap";

function Hero() {
  return (
    <section className="hero d-flex flex-column align-items-center justify-content-center" style={{ backgroundImage: `url(${background})` }}>
        <Button>Sign Up</Button>
    </section>
  );
}

export default Hero;