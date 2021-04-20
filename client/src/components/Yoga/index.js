import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Yoga() {
   
    const youtube_Key = "AIzaSyCkGh56mI4GQnvTtVoHCWVTvkUX7uzpjr8"

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
    function getVariableforAllPoses(newResult){
        for(let i=0; i<newResult.length; i++){
          let allPoses = newResult[i].english_name;
          $('.select-dropdown').append(
            `
            <option class="dropdown-style" id="move-dropdown" value="${allPoses}">
              ${allPoses}
            </option>
            `)
          if(allPoses === newResult[i].english_name){
            let sanskritName = newResult[i].sanskrit_name;
            let poseImage = newResult[i].img_url;
          }
        }
        submitButton(newResult);
      }




  




  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };


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
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {books.length ? (
              <List>
                {books.map(book => {
                  return (
                    <ListItem key={book._id}>
                      <a href={"/books/" + book._id}>
                        <strong>
                          {book.title} by {book.author}
                        </strong>
                      </a>
                      <DeleteBtn onClick={() =>{}} />
                    </ListItem>
                  );
                })}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }


export default Yoga;
