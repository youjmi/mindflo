import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../components/ContactForm";
import drop from "./images/dripdrop.png";
import stones from "./images/stonestacked.png";
import succulent from "./images/succlentpineapple.png";
import hay from "./images/hay.png";
import Row from "../components/Row";
import Col from "../components/Col";
import "./css/home.css"
import Wrapper from "../components/Wrapper";
//import Container from "../components/ImageContainer";



function Home() {
  return (
    <Wrapper>
      <section id="about" className="about">
     
        <Row>
          <Col size="lg-4">
            {/* <Container> */}
            <img src={stones} />
            {/* </Container> */}
          </Col>
          <Col size="lg-8">
          <h1>About Us</h1>
            <p>Stuff about this applicaton!</p>
          </Col>
        </Row>
      </section>
      <section id="meditation" className="medidtation">
      
        <Row>
          
          <Col size="lg-8">
          <h1>Meditation</h1>
            <p>Stuff about meditation!</p>
          </Col>
          <Col size="lg-4">
            
              <img src={drop} />
         
          </Col>
        </Row>
      </section>
      <section id="blog" className="blog">
      
        <Row>
          
          <Col size="lg-4">
            
            <img src={succulent} />
            
          </Col>
          <Col size="lg-8">
          <h1>Blog</h1>
            <p>Stuff about the blog</p>
          </Col>
        </Row>
      </section>
      <section id="dashboard" className="dashboard">
      
        <Row>
          
          <Col size="lg-8">
          <h1>Dashboard</h1>
            <p>Stuff about dashboard!</p>
          </Col>
          <Col size="lg-4">
           
            <img src={hay} />
          
          </Col>
        </Row>
      </section>
      <section id="about" className="contact">
      
        <Row>
          
          <Col size="lg-6">
          <h1>Contact Us</h1>
            <p>Type some text here</p>
          </Col>
          <Col size="lg-6">
            <ContactForm />
          </Col>
        </Row>
      </section>
      </Wrapper>
  );
}

export default Home;
