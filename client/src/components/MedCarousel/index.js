import React, { useState } from "react";

import { Carousel, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import beach from "./beachwave1.png";
import Iframe1 from "./iframe1";
import Iframe2 from "./iframe2";
import Iframe3 from "./iframe3";
import "./style.css";

const MeditationPlayer = (props) => {


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
        <iframe 
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/1nPCTXAxBVo"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />
          <Carousel.Caption>
            <h3>Earth Journey Meditation for Deep Relaxation</h3>
            <h3>Guided by: Caroline McCready Meditation</h3>
            <p className="textMed">
              This is an extended guided meditation aimed at helping you relax
              by using your breath and connecting with the natural world. This
              meditation is an hour long and recommended for those that need to
              take an hour out of their day to relax.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <iframe 
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/l-fhlzZRcqk"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />

          <Carousel.Caption>
            <h3>
              Guided Visualization for Renewal, Transformation & Empowerment -
              Journey to the Pyramid
            </h3>
            <h3>Guided by: Rising Higher Meditation</h3>
            <p className="textMed">
              A New Beginning for a New Year. Take the journey to the Pyramids
              and find Renewal, Transformation, and Empowerment. Guided
              Meditation. This guided meditation takes about 40 minutes to
              complete.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <iframe 
            width="560"
            height="315"
            src={"https://www.youtube.com/embed/G1TD2uVdotM"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            />

          <Carousel.Caption>
            <h3>
              Short Guided Meditation: Release All Negative Energy & Worries
            </h3>
            <h3>Guided by: Jason Stephenson</h3>
            <p className="textMed">
              This video is a short guided meditation to help release any
              negative energies and anxieties from your day. It's great for when
              you don't have time for a long meditaiton and just need a quick 10
              minute break for your mind during the day or as you go to sleep.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MeditationPlayer;
