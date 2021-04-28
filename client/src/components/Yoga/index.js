import React, { useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
// import API from "../../utils/API";
import { Col, Row, Container, Dropdown, Carousel } from "react-bootstrap";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { Button } from "react-bootstrap";
import API from "../../utils/yoga";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import "./style.css";

import "bootstrap/dist/js/bootstrap.js";

function Yoga() {
  // const youtube_Key = "AIzaSyCkGh56mI4GQnvTtVoHCWVTvkUX7uzpjr8"
  const [allPoses, setPoses] = useState([]);
  const [photoPose, setPhoto] = useState([]);
  const [isVideo, setVideo] = useState([]);

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    listOfAllYogaPoses();
  }, []);

  function listOfAllYogaPoses() {
    API.getYoga()
      .then((res) => setPoses(res.data))
      .catch((error) => console.log(error));
    // .then(english_name)
    // if
  }
  console.log(allPoses);

  function getValue(event) {
    setPhoto(event.target.value);
    //  console.log("TESTING")
    // console.log(event)
    console.log(event.target);
    console.log(event.target.getAttribute("text"));
    // console.log([event.target.getAttribute('id')])

    //   // const photoPose = event.target.value
    setVideo(event.target);
    //   // const valueSelected = event.target.value;
    // .then((res) => setPhoto(res.data))
    // // //  API.getPosePhoto(id)
    //  .then((res)=>setPhoto(res.data))
    //  .catch(error => console.log(error))

    console.log(isVideo);
    // console.log (photoPose)
  }
  console.log(photoPose);

  //  function getYoutube(event){
  //    console.log (event)
  //    console.log(event.target.value)
  //  }
  // function getPhoto(event){
  //   event.preventDefault();
  //   if (allPoses.english_name && allPoses.img.url){
  //   setPhoto()

  // }
  //         }
  //         console.log(photoPose)

  // function getVariableforAllPoses(newResult){
  //     for(let i=0; i<newResult.length; i++){
  //       let allPoses = newResult[i].english_name;

  //       if(allPoses === newResult[i].english_name){
  //         let sanskritName = newResult[i].sanskrit_name;
  //         let poseImage = newResult[i].img_url;
  //       }
  //     }
  //     submitButton(newResult);
  //   }

  //  function youtubeVideo() {
  //     return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${isVideo}+yoga+pose&maxResults=1&&safeSearch=moderate&key=${youtube_Key}`
  //     )
  //     // .then(youtubeResult =>
  //     //     youtubeResult.json())
  //       .then(youtubeResult => {
  //         displayOtherResults(youtubeResult);
  //       })
  //       .catch(error =>
  //         console.log(error))

  // }

  // function getPhoto

  // function submitButton(newResult){
  //     $('.dropdown-form').submit(event => {
  //       event.preventDefault();
  //       let valueSelected = $('.dropdown-style:selected').val();
  //       callYoutubeAPI(valueSelected);
  //       for(let i=0; i<newResult.length; i++){
  //         if(valueSelected === newResult[i].english_name){
  //           let objectSelected = newResult[i];
  //           cssChanges();
  //           displayResults(objectSelected);
  //         }
  //       }
  //     });

  // Load all books and store them with setBooks
  //   useEffect(() => {
  //     loadBooks()
  //   }, [])

  // Loads all books and sets them to books
  //   function loadBooks() {
  //     API.getBooks()
  //       .then(res =>
  //         setBooks(res.data)
  //       )
  //       .catch(err => console.log(err));
  //   };
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          {/* <Jumbotron>
            


            <div>
              <h1 value= {yoga.img_url}> Yoga Photo here {yoga.img_url}</h1>
             </div>
             
            </Jumbotron> */}

          
          <Jumbotron className ="yogaJumbo" style={{height:"100%", width: "100%"}}>
            <Dropdown isOpen={isOpen} toggle={toggle} className="yogaToggle">
            <Dropdown.Toggle caret id="size-dropdown">
              Yoga Poses
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <select onChange={getValue}>
                {allPoses.map((yoga) => (
                  <option id={yoga.english_name} value={yoga.img_url}>
                    {yoga.english_name}
                  </option>
                ))}
              </select>
            </Dropdown.Menu>
          </Dropdown>
            <div>
              <img className="yogaPics" src={photoPose}></img>
            </div>
          </Jumbotron>
        </Col>
        <Col size="md-4">
          <Carousel activeIndex={index} onSelect={handleSelect} className="yogaCarousel">
            <Carousel.Item className="yogaItem">
              <iframe className="yogaCaro"
                width="460"
                height="215"
                src={"https://www.youtube.com/embed/7ciS93shMNQ"}
                title="Embedded youtube"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </Carousel.Item>
            <Carousel.Item className="yogaItem">
              <iframe className="yogaCaro"
                width="460"
                height="215"
                src={"https://www.youtube.com/embed/3j5GwysBCfA"}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </Carousel.Item>
            <Carousel.Item className="yogaItem">
              <iframe className="yogaCaro"
                width="460"
                height="215"
                src={"https://www.youtube.com/embed/b1H3xO3x_Js"}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </Carousel.Item>
          </Carousel>
          {/* <Jumbotron>
            <div>
              <iframe
                width="560"
                height="315"
                src={"https://www.youtube.com/embed/7ciS93shMNQ"}
                title="Embedded youtube"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              
            </div>
          </Jumbotron> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Yoga;
