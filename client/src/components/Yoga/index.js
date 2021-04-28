import React, { useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
// import API from "../../utils/API";
import { Col, Row, Container, Dropdown } from "react-bootstrap";
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
         



 function getValue(event){
  // setVideo(event.target.label) 
  // setPhoto(event.target.value)

  setPhoto(event.target.value)
  //  console.log("TESTING")
  console.log(event.target.attributes.innerHTML)
  console.log(event.target.outerText)
  console.log(event)
  // console.log([event.target.getAttribute('id')])

//   // const photoPose = event.target.value
  setVideo(event.target.id) 
//   // const valueSelected = event.target.value;
// .then((res) => setPhoto(res.data))
// // //  API.getPosePhoto(id)
//  .then((res)=>setPhoto(res.data))
//  .catch(error => console.log(error))

// console.log(isVideo)
// console.log (photoPose)
  } 
  // console.log (photoPose)      

 function getYoutube(event){
   console.log (event)
   console.log(event.target.id)
   setVideo(event.target.id) 
 }
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

  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          {/* <Jumbotron>
            


            <div>
              <h1 value= {yoga.img_url}> Yoga Photo here {yoga.img_url}</h1>
             </div>
             
            </Jumbotron> */}

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
          <Jumbotron>
            <div>
              <img src={photoPose}></img>
            </div>
          </Jumbotron>
          {/* <select onChange={getValue}>
  <option value="1">Gabe</option>
  <option value="2">Frankie</option>
  <option value="3">Jezzy</option>
</select> */}

          {/* <Button  onClick={submitButton} >Submit</Button> */}
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
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
              {/* <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} ></iframe> */}
            </div>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Yoga;
