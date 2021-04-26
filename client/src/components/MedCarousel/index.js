import React, { useState } from "react";

import { Carousel, Card } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import beach from "./beachwave1.png";
import "./style.css";

const MeditationPlayer = (props) => {
  const [video, setNewVideo] = useState([
    {
      title: "Earth Journey Meditation for Deep Relaxation",
      author: "Caroline McCready Meditation",
      link:
        "https://www.youtube.com/watch?v=1nPCTXAxBVo&ab_channel=CarolineMcCreadyMeditation",
      about: "add context",
    },
    {
      title:
        "Guided Visualization for Renewal, Transformation & Empowerment - Journey to the Pyramid",
      author: "Rising Higher Meditation",
      link:
        "https://www.youtube.com/watch?v=l-fhlzZRcqk&ab_channel=RisingHigherMeditation",
      about: "add context",
    },
  ]);

  const [currentSlide, setCurrentSlide] = useState(0);
  //const [nextSlide, setNextSlide] = useState([setCurrentSlide + 1]);

  const handleNextVideo = (e) => {
    e.preventDefault();

    setNewVideo(() => {
      if (currentSlide + 1 > video.length - 1) {
        return 0;
      } else {
        return currentSlide + 1;
      }
    });
  };

  return (
    <div>
      <Carousel>
        {/* <Card> */}
        {video.map((videos, index) => {
          <Carousel.Item interval={1000} onClick={handleNextVideo} key={index} value={videos}>
            {/* <img
            className="d-block w-100"
            src={beach}
            alt="First slide"
          /> */}
            {/* <video style={{ width: "400px", height: "400px" }}>
              <source src={videos.link} type="video/mp4"></source>
            </video> */}
            <Carousel.Caption>
              <h3>{videos.title}</h3>
              <h4>{videos.author}</h4>
              <p>{videos.context}</p>
            </Carousel.Caption>
          </Carousel.Item>;
        })}
        {/* <Carousel.Item interval={500} onClick={handleNextVideo}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>{video.title}</h3>
            <h4>{video.author}</h4>
            <p>{video.about}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={handleNextVideo}>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>{video.title}</h3>
            <h4>{video.author}</h4>
            <p>{video.about}</p>
          </Carousel.Caption>
        </Carousel.Item> */}
        {/* </Card>  */}
      </Carousel>
    </div>
  );
};

export default MeditationPlayer;
