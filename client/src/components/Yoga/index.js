import React, { useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
// import API from "../../utils/API";
import { Col, Row, Container } from "react-bootstrap";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
import { Button } from "react-bootstrap";
import axios from "axios";

function Yoga() {
   
    const youtube_Key = "AIzaSyCkGh56mI4GQnvTtVoHCWVTvkUX7uzpjr8"
    const [allPoses, getVariableforAllPoses] = useState([]);

    useEffect(() => {
            listOfAllYogaPoses()
          }, [])

          function listOfAllYogaPoses(){
            return axios.get('https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json')
            .then(result =>
              result.json())
            .then(newResult => {
              getVariableforAllPoses(newResult)
              var newResult = newResult;
            })
            .catch(error =>
              console.log(error))
          }
          
    function getVariableforAllPoses(newResult){
        for(let i=0; i<newResult.length; i++){
          let allPoses = newResult[i].english_name;
        
          if(allPoses === newResult[i].english_name){
            let sanskritName = newResult[i].sanskrit_name;
            let poseImage = newResult[i].img_url;
          }
        }
        submitButton(newResult);
      }



     function youtubeVideo(valueSelected) {
        return axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${valueSelected}+yoga+pose&maxResults=1&&safeSearch=moderate&key=${youtube_Key}`
        )
        .then(youtubeResult =>
            youtubeResult.json())
          .then(youtubeResult => {
            displayOtherResults(youtubeResult.items[0]);
          })
          .catch(error =>
            console.log(error))
    
    
    
    }
 
      


  

    function submitButton(newResult){
        $('.dropdown-form').submit(event => {
          event.preventDefault();
          let valueSelected = $('.dropdown-style:selected').val();
          callYoutubeAPI(valueSelected);
          for(let i=0; i<newResult.length; i++){
            if(valueSelected === newResult[i].english_name){
              let objectSelected = newResult[i];
              cssChanges();
              displayResults(objectSelected);
            }
          }
        });


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


    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Research Yoga</h1>
            </Jumbotron>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Dropdown Button
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" value={allPoses}> {allPoses}</Dropdown.Item>
                        
                    </Dropdown.Menu>
            </Dropdown> 
            <Button>Submit</Button>
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

}
export default Yoga;
