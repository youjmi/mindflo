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
        
        <div className="footer mt-5">
            <Row className ="footerRow container">
                <Col className="footerCol1 container" size="md-4">
                    <h1 className="footerTitle">Information</h1>
                    <Link className="footerLink"> About Us</Link>
                </Col>

                <Col className="footerCol2 container" size="md-4">
                    <div className="footerContact">
                    <Link className = "homeTitle" to="contact"></Link>
                    <h1 className="footerTitle">Contact Us Here</h1>
                    <div>
                    <Contact/>
                    </div>
                    </div>
                </Col>
            </Row>
        </div>
   





    )

}

export default Footer