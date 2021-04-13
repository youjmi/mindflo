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
import {Link} from "react-router-dom"
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
          <h1 className="homeTitle1">About Us</h1>
            <p>Stuff about this applicaton!</p>
          </Col>
        </Row>
      </section>
      <section id="meditation" className="medidtation">
      
        <Row>
          
          <Col size="lg-8">
          <h1 className="homeTitle2">Meditation</h1>
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
          <h1 className="homeTitle1">Blog</h1>
            <p>Stuff about the blog</p>

            
          </Col>
        </Row>
      </section>
      <section id="dashboard" className="dashboard">
      
        <Row>
          
          <Col size="lg-8">
          <h1 className="homeTitle2">Dashboard</h1>
            <p>Stuff about dashboard!</p>
            <Link to="/dashboard">Dashboard</Link>
          </Col>
          <Col size="lg-4">
           
            <img src={hay} />
          
          </Col>
        </Row>
      </section>

      <section id="signup" className="signup">
      
        <Row>
          
          <Col size="lg-4">
            
            <img src={succulent} />
            
          </Col>
          <Col size="lg-8">
          <h1 className="homeTitle1">SIGN UP!!!</h1>
            <p>Stuff about SIGNINGUP</p>
          </Col>
        </Row>
      </section>


      
      
      <section id="about" className="contact">
      
        <Row>
          
          <Col size="lg-6">
          <h1 className="homeTitle2">Contact Us</h1>
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

// function Home() {
//     return (
//       <div>
//           <h1>HOME SECTION</h1>
//           <h6>Lorem ipsum dolor sit amet, veniam salutatus ad vel, ei vix iudicabit dissentiet, fugit percipit nec ad. Minim affert eloquentiam te quo. Causae scribentur in nec. Pri eros senserit ut, dolor rationibus adipiscing ex ius, ne est viris nusquam theophrastus. Vim cu quod vocent consectetuer, ad qui invidunt forensibus. Cu eum falli aliquip, ut aeque constituto incorrupte ius, per in mentitum laboramus neglegentur. Cu omnis persecuti mea.

// Possim euripidis mel te. Soleat feugait intellegat vis ut, sumo dicunt cotidieque mea id, ut cibo soleat eos. Dolore accusata at vis, ei eum tation putant. Eam an solum maluisset persequeris, labore feugiat feugait ad his. Facete percipit eos ut, cu cetero elaboraret philosophia quo. Pro laudem patrioque ei.

// Melius minimum per ne, ius quaeque nusquam probatus id. Vix solum nominati adolescens ne, viris comprehensam ne has. Magna prima omnesque cu sea, ancillae invidunt assueverit ea usu. Ex minim accommodare qui. Numquam intellegat cu sed, eum exerci mediocrem sapientem at, ut usu affert postea. Eos ei legimus vituperata, qui ut posidonium assueverit instructior, minimum scaevola perfecto in vel.

// Cum ex homero dignissim, per eu causae latine fastidii. Et verear temporibus disputando quo, in vel dico delenit persequeris. Qui in invidunt intellegam, no esse recusabo philosophia nec. Nec ei postea accusamus, minimum appareat appellantur nec ea, affert delenit singulis his ne. Mel ne veritus concludaturque, alia democritum eloquentiam no eam.

// Qui hinc liberavisse ad, pro in atqui labores maiestatis. In omnes integre menandri eos, vim animal platonem te. Ut simul ocurreret has, menandri electram complectitur has cu, no dico quando usu. Ex vel feugait delectus persecuti, mucius commodo vis no.</h6>
//       </div>
  
//     );
//   }
  
//   export default Home;
