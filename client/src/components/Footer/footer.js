import React from 'react';
import { Link } from "react-router-dom";
import Container from "../Container"
import Row from "../Row"
import Col from "../Col"
import "./style.css"
import Contact from "../ContactForm"
const Footer = () => {




    return (
        // <div className="footer" style={{textAlign: "center"}}>
        //     <h1>FOOTER</h1>
        // </div>
        <Container>
        <div className="footer">

            <Row >
                <Col className="footerCol1" size="sm-4">
                    <h1 className="footerTitle">Information</h1>
                    <Link className="footerLink"> About Us</Link>
                </Col>

                <Col className="footerCol2" size="sm-4">
                    <div className="footerContact">
                    <h1 className="footerTitle">Contact Us Here</h1>
                    <Contact/>
                    </div>
                </Col>
            </Row>
        </div>
        </Container>





    )

}

export default Footer