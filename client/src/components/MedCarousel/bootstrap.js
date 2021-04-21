import React, { useState } from "react";

import { Carousel, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


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
        <Card>
          <Carousel.Item interval={1000} onClick={handleNextVideo}>
            {/* <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=373940"
              alt="First slide"
            /> */}
            <Carousel.Caption>
              <h3>test</h3>
              <h4>Hello World!</h4>
              <p>Having fun out here!</p>
            </Carousel.Caption>
          </Carousel.Item>

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
        </Card>
      </Carousel>
    </div>
  );
};

export default MeditationPlayer;
