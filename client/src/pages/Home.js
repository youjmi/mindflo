import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.min.css'
//import ContactForm from "../components/ContactForm";
import drop from "./images/dripdrop.png";
//import stones from "./images/stonestacked.png";
//import succulent from "./images/succlentpineapple.png";
import hay from "./images/hay.png";
//import Row from "../components/Row";
//import Col from "../components/Col";
import "./css/home.css";
//import Col from "../components/Col";
import "./css/home.css"
import Wrapper from "../components/Wrapper";
//import Container from "../components/Container";
import {Link} from "react-router-dom"
//import Container from "../components/ImageContainer";
import about from "./images/aboutusimg.png"
import meditate from "./images/meditationimg.png"
import blog from "./images/blogimg2.png"
import dashboard from "./images/dashboadimg.png"
import ReactApexChart from "../components/Charts";
import arrow from "./images/dividerarrow.png"

function Home(props) {
  return (
    <>
      <section id="about" className="about">
     
        <Row>
 
          <Col size="sm-4">
         
            <img  src={about} className="leftimage"/>
         
          </Col>
          
          <Col size="sm-8">
        
          <h1 className="homeTitle1">About Us</h1>
            <h2 className="homeTitle1 mt-5">Welcome to mindFlō, a self-care service tracker that allows you to track the progress in focusing on your self-care. We’re here for you to make sure you take of your MBP-Mind,Body,Pamper. 
                                     {/* <p>Mind (zen out with a meditation session)</p>
                                    <p>Body (workout or try your yoga practice)</p>
                                  <p>Pamper (vibe out with a facial, bath bomb, or anything that makes you feel good)</p> */}
            </h2>
          </Col>

   
        </Row>
      </section>
      {/* <div className ="divider" src={aarow}></div> */}

      <div><img className="arrowDivider" src={arrow}/></div>
      
      <section id="meditation" className="meditation">
      
        <Row>
        
          <Col size="sm-8">
          <h1 className="homeTitle2">Inspō</h1>
            <h2 className="homeTitle2 mt-5">We’ve provided you a couple videos, music, and photos to find inspiration in you Mind, Body, & Pamper journey</h2>    
            <div className="button2">       
            <Link className = "homeTitle2Button mt-5" to="/meditation" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth' })}>Learn More</Link>
          </div> 
          </Col>
          <Col size="sm-4">
            <img src={meditate} className="rightimage" />
          </Col>
        </Row>
      </section>
      
      {/* <div className ="divider"></div> */}
      <div><img className="arrowDivider" src={arrow}/></div>

      <section id="blog" className="blog">
      
        <Row>
          
          <Col size="sm-4">
            
            <img src={blog} className="leftimage"/>
            
          </Col>
          <Col size="sm-8">
          <h1 className="homeTitle1">Journal</h1>
            <h2 className="homeTitle1 mt-5">Sometimes the best way to track your progress to write out your thoughts. Take the time to document your journey. </h2>
          <div className="button1">
           <Link className = "homeTitle1Button mt-5" to="/blog" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth' })} >View Journal</Link>
          </div>

            
          </Col>
        </Row>
      </section>
      {/* <div className ="divider"></div> */}

      <div><img className="arrowDivider" src={arrow}/></div>

      <section id="dashboard" className="dashboard">
      
        <Row >


          <Col size="sm-8" className ="colHome">
          <h1 className="homeTitle2">Dashboard</h1>
            <h2 className="homeTitle2 mt-5">Our tracker keeps all your efforts catagorized. Add new events and visually see your efforts.</h2>


            <div className="button2">
            <Link to="/dashboard" onClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth' })} id= "progressButton" className= "homeTitle2Button mt-5 mb-5">See Progress </Link>
            </div>
            <ReactApexChart className="apexHome Chart1"/> {/*How to isolate only 1 graph*/}

        

          
            
          </Col>
          {/* <Col size="sm-4">
            <img src={dashboard} className="rightimage" />
          </Col> */}

        </Row>
      </section>

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
