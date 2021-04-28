import React from "react";
// import Hero from "../components/Hero";
// import Container from "../components/Container";
// import Row from "../components/Row";
// import Col from "../components/Col";
// import Cards from "../components/Cards/Cards"
import { Container } from "react-bootstrap";
//import PlayerBtn from "../components/PlayerBtn";
import MusicPlayer from "../components/MusicPlayer";
import MedCarousel from "../components/MedCarousel";
import Yoga from "../components/Yoga"
import "./css/meditation.css";
import "bootstrap/dist/css/bootstrap.min.css";

//MEDITATION page info..//
function Meditation() {
  return (
    <div>

      <section className="meditationVideos">
      <h2 className="musicHeader">Guided Meditation Practices</h2>
        <Container>
          <MedCarousel />
        </Container>
      </section>


      <section className="musicPlayer">
        <h2 className="musicHeader">Music for the Soul</h2>
        <p className="musicText">Set your own pace and song and take a 20 minute break to quiet your mind and self reflect.</p>
        <Container>
          <MusicPlayer />
        </Container>
      </section>


      <section className="yogaSection">
        <Yoga />
      </section>
    </div>
  );
}

export default Meditation;
