import React from "react";
import { Button, Container, Row } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css'
//import ContactForm from "../components/ContactForm";
import drop from "./images/dripdrop.png";
//import stones from "./images/stonestacked.png";
//import succulent from "./images/succlentpineapple.png";
import hay from "./images/hay.png";
//import Row from "../components/Row";
import Col from "../components/Col";
import "./css/home.css"
import Wrapper from "../components/Wrapper";
//import Container from "../components/Container";
import {Link} from "react-router-dom"
//import Container from "../components/ImageContainer";
import about from "./images/aboutusimg.png"
import meditate from "./images/meditationimg.png"
import blog from "./images/blogimg2.png"
import dashboard from "./images/dashboadimg.png"

function Home() {
  return (
    <>
      <Container id="about" className="about">
     
        <Row>
        <Container>
          <Col size="lg-4">
         
            <img  src={about} className="leftimage"/>
         
          </Col>
          
          <Col size="lg-8">
        
          <h1 className="homeTitle1">About Us</h1>
            <h2 className="homeTitle1">Stuff about this applicaton!
            </h2>
          </Col>

        </Container>
        </Row>
      </Container>
      <div className ="divider"></div>
      
      <Container id="meditation" className="meditation">
      
        <Row>
        
          <Col size="sm-4">
            
              <img src={meditate} className="rightimage"/>
         
          </Col>
          <Col size="sm-8">
          <h1 className="homeTitle2">Meditation</h1>
            <h2 className="homeTitle2">Stuff about meditation!</h2>    
            <div className="button2">       
            <Link className = "homeTitle2Button "to="/meditation">Learn More</Link>
</div> 
          </Col>
        </Row>
      </Container>
      <div className ="divider"></div>

      <Container id="blog" className="blog">
      
        <Row>
          
          <Col size="sm-4">
            
            <img src={blog} className="leftimage"/>
            
          </Col>
          <Col size="sm-8">
          <h1 className="homeTitle1">Blog</h1>
            <h2 className="homeTitle1">Stuff about the blog</h2>
          <div className="button1">
           <Link className = "homeTitle1Button "to="/blog">View Blog </Link>
          </div>

            
          </Col>
        </Row>
      </Container>
      <div className ="divider"></div>

      <Container id="dashboard" className="dashboard">
      
        <Row >
        <Col size="sm-4">
           
           <img src={dashboard} className="rightimage"/>
         
         </Col>

          <Col size="sm-8" className ="colHome">
          <h1 className="homeTitle2">Dashboard</h1>
            <h2 className="homeTitle2">Stuff about dashboard!</h2>
          <div className="button2">
            <Link to="/dashboard" className= "homeTitle2Button">See Progress </Link>
            </div>
          </Col>

        </Row>
      </Container>

      {/* <Container id="signup" className="signup">
      
        <Row>
          
          <Col size="lg-4">
            
            <img src={succulent} className="leftimage"/>
            
          </Col>
          <Col size="lg-8">
          <h1 className="homeTitle1">SIGN UP!!!</h1>
            <p className="homeTitle1">Stuff about SIGNINGUP</p>
          </Col>
        </Row>
      </Container> */}


      
      
      {/* <Container id="about" className="contact">
      
        <Row>
          
          <Col size="lg-6">
          <h1 className="homeTitle2">Contact Us</h1>
            <p>Type some text here</p>
          </Col>
          <Col size="lg-6">
            <ContactForm />
          </Col>
        </Row>
      </Container> */}
      </>
  );
}

export default Home;
