import React from 'react';
import { Link } from "react-router-dom";
// import Container from "../Container"
import { Container } from "react-bootstrap"
import Row from "../Row"
import Col from "../Col"
import "./style.css"
import Contact from "../ContactForm"
const Footer = () => {




    return (
        // <div className="footer" style={{textAlign: "center"}}>
        //     <h1>FOOTER</h1>
        // </div>
        
        // <div className="footer mt-5">
        //     <Row className ="footerRow container">

        //         <Col className="footerCol1 container" size="md-8">
        //             <h1 className="footerTitle">Information</h1>
        //             <Link className="footerLink"> About Us</Link>
        //         </Col>

        //         <Col className="footerCol2 container" size="md-4">
        //             <div className="footerContact">
        //             <Link className = "homeTitle" to="contact"></Link>
        //             <h1 className="footerTitle">Contact Us Here</h1>
        //             <div>
        //             <Contact/>
        //             </div>
        //             </div>
        //         </Col>
        //     </Row>
        // </div>
        
        <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col mt-5">
              <h1 className=" footTitle mb-5">Contact Us Here</h1>
               <Contact/>
            </div>
            {/* Column2 */}
            <div className="col footCol mt-5">
              <h1 className=" footTitle" >Get to know us</h1>
              <br></br>
              <ui className="list-unstyled">
              <br></br>

                <li>DANK MEMES</li>
                <br></br>

                <li>OTHER STUFF</li>
                <br></br>

                <li>GUD STUFF</li>
                <br></br>

              </ui>
            </div>
            {/* Column3 */}
            <div className="col footCol mt-5">
              <h1  className=" footTitle">infoo</h1>
              <br></br>
              <ui className="list-unstyled">
                  <br></br>
                <li>DANK MEMES</li>
                <br></br>
                <li>OTHER STUFF</li>
                <br></br>
                <li>GUD STUFF</li>
                <br></br>

                <Link className = "homeTitle" to="contact">LIINK</Link>
              </ui>
            </div>
          </div>
          <hr />
          <div className="row footCol">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} mindflō | All rights reserved |
              Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>





    )

}

export default Footer