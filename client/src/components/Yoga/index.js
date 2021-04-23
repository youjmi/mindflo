import React, { useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
// import API from "../../utils/API";
import { Col, Row, Container, Dropdown} from "react-bootstrap";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { Button } from "react-bootstrap";
import API from "../../utils/yoga"
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import 'bootstrap/dist/js/bootstrap.js';


function Yoga() {
   
    // const youtube_Key = "AIzaSyCkGh56mI4GQnvTtVoHCWVTvkUX7uzpjr8"
    const [allPoses, setPoses] = useState([]);

    useEffect(() => {
            listOfAllYogaPoses()
          }, [])

  function listOfAllYogaPoses(){
    API.getYoga()
    .then((res) => setPoses(res.data))
    .catch(error => console.log(error))   
              
          }
          console.log(allPoses)
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



    //  function youtubeVideo(valueSelected) {
    //     return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${valueSelected}+yoga+pose&maxResults=1&&safeSearch=moderate&key=${youtube_Key}`
    //     )
    //     .then(youtubeResult =>
    //         youtubeResult.json())
    //       .then(youtubeResult => {
    //         displayOtherResults(youtubeResult.items[0]);
    //       })
    //       .catch(error =>
    //         console.log(error))
    
    
    
    // }
 
      


  

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
const [isOpen, setIsOpen] = useState(false)
const toggle = () =>{setIsOpen (!isOpen)} 

    return (

      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Research Yoga</h1>
            </Jumbotron>

            <Dropdown isOpen={isOpen} toggle={toggle}>
              <Dropdown.Toggle caret id="size-dropdown">Yoga Psoes</Dropdown.Toggle>
              <Dropdown.Menu>{allPoses.map(yoga => (<Dropdown.Item>{yoga.english_name}</Dropdown.Item>))}
   </Dropdown.Menu>
</Dropdown>
          
    
         
            {/* <Button  onClick={submitButton} >Submit</Button> */}
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
           
          </Col>
        </Row>
      </Container>
    );
  }


export default Yoga;
