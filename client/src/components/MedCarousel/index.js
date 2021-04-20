import React from "react";
import { Carousel } from "react-bootstrap";

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

//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [nextSlide, setNextSlide] = useState([setCurrentSlide + 1]);

  const handleNextVideo = (e) => {
    e.preventDefault();

    setNewVideo()
    
  };

  return (
    <div>
    {video.length ? ( 
      <Carousel>
        {video.map((videos) => {  
        <Carousel.Item interval={1000} onClick={handleNextVideo}>
          <img className="d-block w-100" src={videos.link} alt="First slide" />
          <Carousel.Caption>
            <h3>{videos.title}</h3>
            <h4>{videos.author}</h4>
            <p>{videos.about}</p>
          </Carousel.Caption>
        </Carousel.Item>
        })}
        {/* <Carousel.Item interval={500} onClick={handleNextVideo}>
          <img className="d-block w-100" src={video.link} alt="Second slide" />
          <Carousel.Caption>
            <h3>{video.title}</h3>
            <h4>{video.author}</h4>
            <p>{video.about}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item onClick={handleNextVideo}>
          <img className="d-block w-100" src={video.link} alt="Third slide" />
          <Carousel.Caption>
            <h3>{video.title}</h3>
            <h4>{video.author}</h4>
            <p>{video.about}</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
      ) : (
          <h3>No Meditations to Share!</h3>
      )}
    </div>
  );
};

export default MeditationPlayer;
